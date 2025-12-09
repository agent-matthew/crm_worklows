import requests
import json
import base64
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

BASE_URL = "https://rest.gohighlevel.com/v1"

class GHLClient:
    def __init__(self, token):
        self.token = token
        self.headers = {
            "Authorization": f"Bearer {self.token}",
            "Content-Type": "application/json"
        }
        # Try to extract location_id from JWT if possible, otherwise it might be needed in args
        self.location_id = self._extract_location_id(token)

    def _extract_location_id(self, token):
        try:
            # Simple JWT verify/decode without signature check just to get payload
            # (Use a proper library in production if validation is needed)
            parts = token.split(".")
            if len(parts) > 1:
                padding = '=' * (4 - len(parts[1]) % 4)
                payload = json.loads(base64.urlsafe_b64decode(parts[1] + padding).decode('utf-8'))
                return payload.get("location_id")
        except Exception as e:
            logger.warning(f"Could not extract location_id from token: {e}")
        return None

    def fetch_opportunities(self, status="open"):
        """
        Fetches opportunities from the API.
        Note: This uses the /pipelines endpoint to iterate or search.
        Actually, searching across all pipelines is easier with v1/opportunities/search?
        Documentation suggests /v1/pipelines/{pipelineId}/opportunities for v1.
        Let's try to list pipelines first if needed, or use a search endpoint.
        
        Refined approach: Use the generic search if available, or fetch all pipelines.
        We will try to fetch from all pipelines.
        """
        opportunities = []
        
        # 1. Fetch Pipelines to get IDs
        pipelines_url = f"{BASE_URL}/pipelines/"
        params = {}
        if self.location_id:
            params['locationId'] = self.location_id
            
        try:
            response = requests.get(pipelines_url, headers=self.headers, params=params)
            response.raise_for_status()
            data = response.json()
            pipelines = data.get('pipelines', [])
            
            for pipeline in pipelines:
                pipeline_id = pipeline.get('id')
                # Fetch opportunities for this pipeline
                opps_url = f"{BASE_URL}/pipelines/{pipeline_id}/opportunities"
                # Pagination could be needed here, simplified for now
                opp_response = requests.get(opps_url, headers=self.headers, params={'limit': 100, 'status': status})
                if opp_response.status_code == 200:
                    opp_data = opp_response.json()
                    opportunities.extend(opp_data.get('opportunities', []))
                else:
                    logger.error(f"Failed to fetch opportunities for pipeline {pipeline_id}: {opp_response.text}")
                    
        except requests.exceptions.RequestException as e:
            logger.error(f"Error fetching opportunities: {e}")
            
        return opportunities

    def update_opportunity_value(self, pipeline_id, opportunity_id, monetary_value):
        """
        Updates the monetary value of a specific opportunity.
        """
        url = f"{BASE_URL}/pipelines/{pipeline_id}/opportunities/{opportunity_id}"
        payload = {
            "monetaryValue": monetary_value
        }
        
        try:
            response = requests.put(url, headers=self.headers, json=payload)
            response.raise_for_status()
            logger.info(f"Successfully updated Opportunity {opportunity_id} to ${monetary_value}")
            return True
        except requests.exceptions.RequestException as e:
            logger.error(f"Failed to update Opportunity {opportunity_id}: {e}")
            return False
