# src/config/db_config.py

# Database connection details
db_host = "localhost"
db_name = "my_database"
db_user = "my_user"
db_password = "my_password"

def get_db_config():
    """
    Function to return the database connection details.
    """
    return {
        "host": db_host,
        "database": db_name,
        "user": db_user,
        "password": db_password
    }