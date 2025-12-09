import os
import dotenv

# Load environment variables from .env file
dotenv.load_dotenv()

# --- Configuration Constants ---

# The commission rate as a decimal. 
# 0.01 = 1%
# 0.025 = 2.5%
# Modify this value to change the calculation logic.
COMMISSION_RATE = 0.015

# Polling interval in seconds
POLL_INTERVAL_SECONDS = 600  # 10 minutes

# --- Environment Variables ---

GHL_ACCESS_TOKEN = os.getenv("GHL_ACCESS_TOKEN")
LOAN_AMOUNT_FIELD_KEY = os.getenv("LOAN_AMOUNT_FIELD_KEY", "loan_with_mipfunding_fee")

if not GHL_ACCESS_TOKEN:
    raise ValueError("GHL_ACCESS_TOKEN is missing from environment variables.")
