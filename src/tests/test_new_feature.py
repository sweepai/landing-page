import pytest
from src.new_feature import new_feature

def test_new_feature():
    """
    This function tests the 'new_feature' function.
    """
    
    # Define the test parameters
    param1 = 1
    param2 = 2
    
    # Call the 'new_feature' function with the test parameters
    result = new_feature(param1, param2)
    
    # Check the result
    assert result == 3, "new_feature function does not work as expected"