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
        # Check by ID or Key. GHL V1 usually puts the ID in 'id'.
        if field.get("id") == LOAN_AMOUNT_FIELD_KEY or field.get("key") == LOAN_AMOUNT_FIELD_KEY:
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
    # This helps troubleshoot mismatches instantly
    available_keys = [f.get("key", f.get("id")) for f in custom_fields]
    logger.warning(f"Failed to find Loan Amount key '{LOAN_AMOUNT_FIELD_KEY}'. Available keys: {available_keys}")
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

def process_single_opportunity(client, opp_id, pipeline_id=None):
    """
    Fetches a single opportunity by ID and updates it if necessary.
    Returns (bool, str) -> (Success/Skipped, Message)
    """
    try:
        opp = client.get_opportunity(opp_id, pipeline_id)
        if not opp:
            return False, f"Opportunity {opp_id} not found."
            
        # 1. Get Loan Amount
        loan_amount = get_loan_amount(opp)
        if loan_amount <= 0:
            return False, f"Skipped: No valid Loan Amount (Found: {loan_amount})"
            
        # 2. Calculate Expected Value
        expected_value = calculate_commission(loan_amount)
        
        # 3. Check if Update Needed
        if should_update(opp, expected_value):
            logger.info(f"Opportunity {opp_id}: Loan Amount=${loan_amount:,.2f} -> Updating Value to ${expected_value:,.2f}")
            success = client.update_opportunity_value(opp.get("pipelineId"), opp_id, expected_value)
            if success:
                return True, "Updated successfully."
            else:
                return False, "Failed to update API."
        else:
            return True, "No update needed (Value already correct)."
            
    except Exception as e:
        logger.error(f"Error processing single opportunity {opp_id}: {e}", exc_info=True)
        return False, f"Error: {str(e)}"
