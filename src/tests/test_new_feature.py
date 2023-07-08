import pytest
from src import new_feature

def test_initialize_feature():
    # Test that the feature is correctly initialized
    config = {'new_feature': {'multiplier': 'invalid'}}
    with pytest.raises(ValueError):
        new_feature.initialize_feature(config)

def test_perform_operation():
    # Test that the main operation of the new feature works as expected
    config = {'new_feature': {'multiplier': 2}}
    data = 10
    result = new_feature.perform_operation(data, config['new_feature'])
    assert result == 20, "Expected result to be 20"

def test_finalize_feature():
    # Test that any necessary cleanup is performed correctly
    resources = [MockResource() for _ in range(3)]
    new_feature.finalize_feature(resources)
    for resource in resources:
        assert resource.is_released(), "Expected resource to be released"