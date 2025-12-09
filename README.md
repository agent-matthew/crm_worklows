# GoHighLevel Commission Updater

## Overview
This Python service monitors your GoHighLevel opportunities and automatically updates the "Opportunity Value" to be a percentage of the "Loan Amount" custom field.

## Setup
1.  Install requirements:
    ```bash
    pip install requests python-dotenv
    ```
2.  Review `.env` to ensure your API Token is correct.

## Usage
Run the script to start the polling loop:
```bash
python main.py
```
It runs every 10 minutes by default.

## Customization
- **Commission Rate**: Edit `COMMISSION_RATE` in `config.py`.
- **Polling Interval**: Edit `POLL_INTERVAL_SECONDS` in `config.py`.
