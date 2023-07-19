import unittest
from src.new_feature import FeatureClass

class TestFeatureClass(unittest.TestCase):
    def setUp(self):
        # Set up necessary objects and variables before each test case
        self.feature_class = FeatureClass()

    def test_feature_function(self):
        # Test the feature_function of the FeatureClass
        self.feature_class.feature_function()
        self.assertEqual(self.feature_class.variable1, "value1")
        self.assertEqual(self.feature_class.variable2, "value2")