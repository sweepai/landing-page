from src.new_feature import FeatureClass

def main():
    # Create an instance of FeatureClass
    feature_class = FeatureClass()
    # Call feature_function to integrate the new feature
    result = feature_class.feature_function()
    print("The result of the new feature is: ", result)

if __name__ == "__main__":
    main()