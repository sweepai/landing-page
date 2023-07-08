import unittest
from src import new_feature

class TestNewFeature(unittest.TestCase):
    def test_main_feature_function(self):
        self.assertEqual(new_feature.main_feature_function(2, 4), 6)

    def test_helper_function1(self):
        self.assertEqual(new_feature.helper_function1(2), 4)

    def test_helper_function2(self):
        self.assertEqual(new_feature.helper_function2(4), 2)

if __name__ == '__main__':
    unittest.main()