from config import COMMISSION_RATE, LOAN_AMOUNT_FIELD_KEY
import logging

logger = logging.getLogger(__name__)

def get_loan_amount(opportunity):
    """
    Extracts the loan amount from the opportunity's custom fields.
    Returns 0.0 if not found or invalid.
    """
    custom_fields = opportunity.get("customFields", [])
    
    for field in custom_fields:
        f_id = field.get("id", "")
        f_key = field.get("key", "")
        f_name = field.get("name", "")
        
        # Normalize name for comparison (e.g. "Loan Amount" -> "loan_amount")
        f_name_norm = f_name.lower().replace(" ", "_").replace("/", "").replace("__", "_")
        target_key_norm = LOAN_AMOUNT_FIELD_KEY.lower()

        # Check by ID, Key, or Normalized Name
        if (f_id == LOAN_AMOUNT_FIELD_KEY or 
            f_key == LOAN_AMOUNT_FIELD_KEY or 
            f_name_norm == target_key_norm or 
            f_name_norm.replace("_", "") == target_key_norm.replace("_", "")):
            
            value = field.get("value")
            # Handle potential string formatting issues (e.g. "$100,000")
            if isinstance(value, str):
                cleaned_value = value.replace('$', '').replace(',', '').strip()
                try:
                    return float(cleaned_value)
                except ValueError:
                    return 0.0
            elif isinstance(value, (int, float)):
                return float(value)
    
    # Debugging: Log available keys if we fail to find the specific one
    # We log Name, Key, AND ID to help the user identify the right one
    available_fields = [{
        "name": f.get("name"), 
        "id": f.get("id"), 
        "key": f.get("key")
    } for f in custom_fields]
    
    logger.warning(f"Failed to find Loan Amount key '{LOAN_AMOUNT_FIELD_KEY}'. Available fields: {available_fields}")
    return 0.0

def calculate_commission(loan_amount):
    """
    Calculates the expected commission based on the loan amount.
    """
    return round(loan_amount * COMMISSION_RATE, 2)

def should_update(opportunity, calculated_value):
    """
    Determines if the opportunity needs an update.
    Returns True if current monetaryValue differs from calculated_value.
    """
    current_value = opportunity.get("monetaryValue")
    
    # Handle None or weird formats
    if current_value is None:
        current_value = 0.0
    else:
        try:
            current_value = float(current_value)
        except ValueError:
            current_value = 0.0
            
    # Compare with a small tolerance for float equality
    return abs(current_value - calculated_value) > 0.01

def process_opportunities(client, opportunities):
    """
    Iterates through opportunities and updates them if necessary.
    """
    updated_count = 0
    errors_count = 0
    
    for opp in opportunities:
        opp_id = opp.get("id")
        pipeline_id = opp.get("pipelineId")
        
        # 1. Get Loan Amount
        loan_amount = get_loan_amount(opp)
        
        # Log missing loan amounts if needed, or just skip
        if loan_amount <= 0:
            # logger.debug(f"Opportunity {opp_id}: skipped (No valid Loan Amount found)")
            continue
            
        # 2. Calculate Expected Value
        expected_value = calculate_commission(loan_amount)
        
        # 3. Check if Update Needed
        if should_update(opp, expected_value):
            logger.info(f"Opportunity {opp_id}: Loan Amount=${loan_amount:,.2f} -> Updating Value to ${expected_value:,.2f}")
            
            # 4. Perform Update
            success = client.update_opportunity_value(pipeline_id, opp_id, expected_value)
            if success:
                updated_count += 1
            else:
                errors_count += 1
                
    return updated_count, errors_count

def process_single_opportunity(client, opp_id, pipeline_id=None, payload_loan_amount=None):
    """
    Fetches a single opportunity by ID and updates it if necessary.
    Uses payload_loan_amount if provided (preferred), otherwise reads from API.
    """
    try:
        opp = client.get_opportunity(opp_id, pipeline_id)
        if not opp:
            return False, f"Opportunity {opp_id} not found."
            
        # 1. Get Loan Amount (Prefer Payload, then API)
        loan_amount = 0.0
        
        # Try Payload first
        if payload_loan_amount:
            try:
                # Handle strings like "$100,000"
                if isinstance(payload_loan_amount, str):
                    loan_amount = float(payload_loan_amount.replace('$', '').replace(',', '').strip())
                else:
                    loan_amount = float(payload_loan_amount)
                logger.info(f"Using Loan Amount from Webhook Payload: ${loan_amount}")
            except ValueError:
                logger.warning(f"Invalid Loan Amount in Payload: {payload_loan_amount}")
        
        # Fallback to API object if payload failed or wasn't provided
        if loan_amount <= 0:
            loan_amount = get_loan_amount(opp)
            
        if loan_amount <= 0:
            return False, f"Skipped: No valid Loan Amount (Found: {loan_amount})"
            
        # 2. Calculate Expected Value
        expected_value = calculate_commission(loan_amount)
        
        # 3. Check if Update Needed
        if should_update(opp, expected_value):
            logger.info(f"Opportunity {opp_id}: Loan Amount=${loan_amount:,.2f} -> Updating Value to ${expected_value:,.2f}")
            # 4. Perform Update
            success = client.update_opportunity_value(opp.get("pipelineId"), opp_id, expected_value, existing_opp=opp)
            if success:
                return True, "Updated successfully."
            else:
                return False, "Failed to update API."
        else:
            return True, "No update needed (Value already correct)."
            
    except Exception as e:
        logger.error(f"Error processing single opportunity {opp_id}: {e}", exc_info=True)
        return False, f"Error: {str(e)}"
