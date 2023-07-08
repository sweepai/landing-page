def main_feature_function(input1, input2):
    # Check for edge cases
    if input1 is None or input2 is None:
        return None

    # Call helper functions
    result1 = helper_function1(input1)
    result2 = helper_function2(input2)

    # Perform main task
    result = result1 + result2

    return result

def new_feature(input1, input2):
    # Check for edge cases
    if input1 is None or input2 is None:
        return None

    # Call helper functions
    result1 = helper_function1(input1)
    result2 = helper_function2(input2)

    # Perform main task
    result = result1 * result2

    return result

def helper_function1(input):
    # Perform sub-task
    return input * 2

def helper_function2(input):
    # Perform sub-task
    return input / 2