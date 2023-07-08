from src.new_feature import new_feature

def main():
    """
    This is the main function that calls the 'new_feature' function.
    """
    
    # Define the parameters for the 'new_feature' function
    param1 = 1
    param2 = 2
    
    # Call the 'new_feature' function with the parameters
    result = new_feature(param1, param2)
    
    # Print the result
    print(f"The result of the new feature is: {result}")

if __name__ == "__main__":
    main()