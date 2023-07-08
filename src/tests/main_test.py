import unittest
from unittest.mock import patch
from src import main, new_feature

class TestMain(unittest.TestCase):
    @patch.object(new_feature, 'calculate')
    @patch.object(new_feature, 'display')
    def test_main(self, mock_display, mock_calculate):
        """
        This function tests the main function of main.py.
        It asserts that the calculate and display functions are called with the correct parameters.
        """
        mock_calculate.return_value = 5
        main.main()
        mock_calculate.assert_called_once_with(2, 3)
        mock_display.assert_called_once_with(5)

if __name__ == '__main__':
    unittest.main()
```


