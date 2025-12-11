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

    def get_opportunity(self, opportunity_id, pipeline_id=None):
        """
        Fetches a single opportunity.
        If pipeline_id is provided, hits the specific endpoint (Fast).
        If not, searches across all pipelines (Slow).
        """
        # Fast Path
        if pipeline_id:
            url = f"{BASE_URL}/pipelines/{pipeline_id}/opportunities/{opportunity_id}"
            try:
                response = requests.get(url, headers=self.headers)
                if response.status_code == 200:
                    return response.json()
                elif response.status_code == 404:
                    logger.warning(f"Opportunity {opportunity_id} not found in pipeline {pipeline_id}")
            except requests.exceptions.RequestException as e:
                logger.error(f"Error fetching opportunity {opportunity_id}: {e}")
        
        # Slow Path (Fallback or if not found above)
        logger.info(f"Searching all pipelines for Opportunity {opportunity_id}...")
        all_opps = self.fetch_opportunities(status='open') # Search open first
        for opp in all_opps:
            if opp.get('id') == opportunity_id:
                return opp
        
        # Try status='all' or other statuses if strictness is needed, but usually 'open' covers active workflows.
        # If still not found, return None
        return None

    def update_opportunity_value(self, pipeline_id, opportunity_id, monetary_value, existing_opp=None):
        """
        Updates the monetary value of a specific opportunity.
        Merges existing fields to prevent 422 Unprocessable Entity errors.
        """
        if response.status_code not in [200, 201]:
                # Log the actual error text! Critical for debugging 422s.
                logger.error(f"GHL API Error {response.status_code}: {response.text}")
                response.raise_for_status()
                
            logger.info(f"Successfully updated Opportunity {opportunity_id} to ${monetary_value}")
            return True
        except requests.exceptions.RequestException as e:
            logger.error(f"Failed to update Opportunity {opportunity_id}: {e}")
            return False

    def update_opportunity_value(self, pipeline_id, opportunity_id, monetary_value, existing_opp=None):
        """
        Updates the monetary value of a specific opportunity.
        """
        url = f"{BASE_URL}/pipelines/{pipeline_id}/opportunities/{opportunity_id}"
        
        payload = {
            "monetaryValue": monetary_value
        }
        
        if existing_opp:
            # 1. Status & Stage (Required)
            if existing_opp.get("status"):
                payload["status"] = existing_opp.get("status")
            if existing_opp.get("pipelineStageId"):
                payload["pipelineStageId"] = existing_opp.get("pipelineStageId")
            
            # --- Robust Name Extraction ---
            
            # Opportunity Title
            # Try specific keys first, fall back to 'title' or 'name' which might be ambiguous
            opp_title = (existing_opp.get("opportunity_name") or 
                         existing_opp.get("title") or 
                         existing_opp.get("name"))

            # Contact Name
            # Check nested 'contact' object first
            contact_dict = existing_opp.get("contact") or {}
            contact_name = (contact_dict.get("name") or 
                            contact_dict.get("full_name") or 
                            contact_dict.get("fullName"))
            
            if not contact_name:
                # Construct from contact dict parts
                f = contact_dict.get("firstName") or contact_dict.get("first_name") or ""
                l = contact_dict.get("lastName") or contact_dict.get("last_name") or ""
                if f or l:
                     contact_name = f"{f} {l}".strip()

            if not contact_name:
                # Check ROOT level fields (common in some GHL representations)
                contact_name = (existing_opp.get("contact_name") or 
                                existing_opp.get("full_name") or 
                                existing_opp.get("fullName"))

            if not contact_name:
                # Construct from root parts
                f = existing_opp.get("first_name") or existing_opp.get("firstName") or ""
                l = existing_opp.get("last_name") or existing_opp.get("lastName") or ""
                if f or l:
                    contact_name = f"{f} {l}".strip()

            logger.info(f"Extracted [Contact: '{contact_name}'] [Opp: '{opp_title}'] for Update Payload")

            # --- Construct Payload ---
            # 'name' field in V1 often maps to the CONTACT Name when linked.
            # 'title' field maps to the OPPORTUNITY Title.
            
            if contact_name:
                payload["name"] = contact_name
            else:
                # If we absolutely cannot find a contact name, we are in a bind.
                # If we send Opp Title as 'name', we risk renaming the contact.
                # Use Opp Title as fallback but log warning.
                logger.warning("Could not find Contact Name! Using Opportunity Title as 'name' fallback.")
                if opp_title:
                    payload["name"] = opp_title

            if opp_title:
                payload["title"] = opp_title
                # Some docs suggest 'opportunity_name' might be used? Add it just in case.
                # It shouldn't hurt to be redundant if keys are ignored.
                payload["opportunity_name"] = opp_title

        try:
            response = requests.put(url, headers=self.headers, json=payload)
                
            logger.info(f"Successfully updated Opportunity {opportunity_id} to ${monetary_value}")
            return True
        except requests.exceptions.RequestException as e:
            logger.error(f"Failed to update Opportunity {opportunity_id}: {e}")
            return False
