import os
import logging
import sys
from flask import Flask, request, jsonify
from config import GHL_ACCESS_TOKEN
from ghl_client import GHLClient
from logic import process_single_opportunity
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Configure Logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.StreamHandler(sys.stdout)
    ]
)
logger = logging.getLogger("WebhookService")

app = Flask(__name__)

@app.route("/", methods=["GET"])
def health_check():
    return jsonify({"status": "active", "service": "Commission Updater"}), 200

@app.route("/webhook", methods=["POST"])
def handle_webhook():
    """
    Receives GHL 'Opportunity Changed' webhook.
    Expected payload includes 'id' (opportunity ID).
    """
    data = request.json
    
    if not data:
        return jsonify({"error": "No JSON payload provided"}), 400
        
    logger.info(f"Received Webhook Payload: {data}")
    
    # GHL Webhooks usually contain 'id' or 'contact_id'. We need the Opp ID.
    opp_id = data.get("id")
    # Support both camelCase and snake_case (GHL varies)
    pipeline_id = data.get("pipelineId") or data.get("pipeline_id")
    
    # Extract Loan Amount from Custom Data (if available) - This bypasses API read issues
    custom_data = data.get("customData", {})
    # Check common keys users might use
    payload_loan_amount = (
        custom_data.get("loan-amount") or 
        custom_data.get("loan_amount") or 
        custom_data.get("Loan Amount") or
        custom_data.get("loan amount")
    )
    
    if not opp_id:
        return jsonify({"error": "Missing 'id' in payload"}), 400
        
    # Initialize Client
    client = GHLClient(token=GHL_ACCESS_TOKEN)
    
    # Process
    success, message = process_single_opportunity(client, opp_id, pipeline_id, payload_loan_amount)
    
    if success:
        return jsonify({"status": "success", "message": message}), 200
    else:
        # We return 200 even on logic failure to prevent GHL from retrying indefinitely
        # unless it's a transient server error.
        logger.warning(f"Processing failed: {message}")
        return jsonify({"status": "ignored", "reason": message}), 200

if __name__ == "__main__":
    # Local dev run
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 5000)))
