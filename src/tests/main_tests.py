import unittest
from src import main

class TestMain(unittest.TestCase):
    def test_main(self):
        # Call the main function and check the output
        self.assertEqual(main.main(), 6)

if __name__ == '__main__':
    unittest.main()