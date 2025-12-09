import time
import logging
import sys
from config import GHL_ACCESS_TOKEN, POLL_INTERVAL_SECONDS
from ghl_client import GHLClient
from logic import process_opportunities

# Configure Logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.StreamHandler(sys.stdout),
        logging.FileHandler("commission_updater.log")
    ]
)
logger = logging.getLogger("Main")

def main():
    logger.info("Starting GHL Commission Updater Service...")
    logger.info(f"Poll Interval: {POLL_INTERVAL_SECONDS} seconds")
    
    client = GHLClient(token=GHL_ACCESS_TOKEN)
    
    try:
        while True:
            logger.info("Polling for opportunities...")
            start_time = time.time()
            
            try:
                # Fetch all open opportunities
                opportunities = client.fetch_opportunities(status="open")
                logger.info(f"Fetched {len(opportunities)} open opportunities.")
                
                # Process them
                updated, errors = process_opportunities(client, opportunities)
                
                if updated > 0 or errors > 0:
                    logger.info(f"Cycle Complete: {updated} updated, {errors} errors.")
                else:
                    logger.info("No updates required.")
                    
            except Exception as e:
                logger.error(f"Unexpected error in polling loop: {e}", exc_info=True)
            
            # Sleep logic
            elapsed = time.time() - start_time
            sleep_time = max(0, POLL_INTERVAL_SECONDS - elapsed)
            logger.debug(f"Sleeping for {sleep_time:.2f} seconds...")
            time.sleep(sleep_time)
            
    except KeyboardInterrupt:
        logger.info("Service stopping by user request (Ctrl+C).")
        sys.exit(0)

if __name__ == "__main__":
    main()
