from src.new_feature import init_feature, run_feature

def main():
    '''
    This is the main function that initializes and runs the new feature.
    '''
    
    # Initialize the new feature
    init_feature()
    
    # Run the new feature and get the result
    result = run_feature()
    
    # Print the result
    print(f"The result of the new feature is: {result}")

if __name__ == "__main__":
    main()