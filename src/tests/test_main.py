import unittest
from src import main
from src.new_feature import FeatureClass

class TestMain(unittest.TestCase):
    def test_main(self):
        # Test the integration of the new feature in main
        main.main()
        feature_class = FeatureClass()
        self.assertEqual(feature_class.variable1, "value1")
        self.assertEqual(feature_class.variable2, "value2")