from src import new_feature

def main():
    """
    This is the main function of the program.
    It calls the calculate and display functions of the new feature.
    """
    result = new_feature.calculate(5, 4)  # Changed the parameters passed to the calculate function to accommodate the new feature
    new_feature.display(result)  # No changes needed here as the display function will handle the new feature's results

if __name__ == '__main__':
    main()