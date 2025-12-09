import unittest
from unittest.mock import MagicMock
from logic import get_loan_amount, calculate_commission, should_update, process_opportunities
from config import LOAN_AMOUNT_FIELD_KEY

class TestCommissionLogic(unittest.TestCase):
    
    def test_get_loan_amount(self):
        # Case 1: Key matches and value is float
        opp1 = {
            "customFields": [
                {"id": "other_field", "value": "test"},
                {"id": LOAN_AMOUNT_FIELD_KEY, "value": 100000.0}
            ]
        }
        self.assertEqual(get_loan_amount(opp1), 100000.0)

        # Case 2: String with currency formatting
        opp2 = {
            "customFields": [
                {"id": LOAN_AMOUNT_FIELD_KEY, "value": "$150,000.50"}
            ]
        }
        self.assertEqual(get_loan_amount(opp2), 150000.50)

        # Case 3: Missing field
        opp3 = {"customFields": []}
        self.assertEqual(get_loan_amount(opp3), 0.0)

    def test_calculate_commission(self):
        # Assuming config.COMMISSION_RATE is 0.01 (1%)
        # Logic: 100,000 * 0.01 = 1,000
        self.assertEqual(calculate_commission(100000), 1000.0)
        self.assertEqual(calculate_commission(0), 0.0)
        self.assertEqual(calculate_commission(150500), 1505.0)

    def test_should_update(self):
        # Current Value matches Calculated -> False
        opp = {"monetaryValue": 1000.0}
        self.assertFalse(should_update(opp, 1000.0))
        
        # Current Value differs -> True
        opp = {"monetaryValue": 999.0}
        self.assertTrue(should_update(opp, 1000.0))
        
        # Current Value None -> True
        opp = {"monetaryValue": None}
        self.assertTrue(should_update(opp, 1000.0))

    def test_process_opportunities(self):
        mock_client = MagicMock()
        mock_client.update_opportunity_value.return_value = True

        opportunities = [
            {
                "id": "opp1", 
                "pipelineId": "pip1",
                "monetaryValue": 500.0, # Incorrect, should be 1000
                "customFields": [{"id": LOAN_AMOUNT_FIELD_KEY, "value": 100000}]
            },
            {
                "id": "opp2", 
                "pipelineId": "pip1",
                "monetaryValue": 2500.0, # Correct (250k * 0.01 = 2500)
                "customFields": [{"id": LOAN_AMOUNT_FIELD_KEY, "value": 250000}]
            },
            {
                "id": "opp3",
                "pipelineId": "pip1",
                "monetaryValue": 0,
                "customFields": [] # No loan amount
            }
        ]
        
        updated, errors = process_opportunities(mock_client, opportunities)
        
        # Only opp1 should trigger an update
        self.assertEqual(updated, 1)
        self.assertEqual(errors, 0)
        mock_client.update_opportunity_value.assert_called_once_with("pip1", "opp1", 1000.0)

if __name__ == '__main__':
    unittest.main()
