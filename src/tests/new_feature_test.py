import unittest
from src import new_feature

class TestNewFeature(unittest.TestCase):
    def test_calculate(self):
        """
        This function tests the calculate function of the new feature.
        It asserts that the function returns the correct sum of its parameters.
        """
        result = new_feature.calculate(2, 3)
        self.assertEqual(result, 5)

    def test_display(self):
        """
        This function tests the display function of the new feature.
        It asserts that the function correctly prints the result to the console.
        """
        with unittest.mock.patch('builtins.print') as mock_print:
            new_feature.display(5)
            mock_print.assert_called_once_with("The result is 5")

if __name__ == '__main__':
    unittest.main()
```


