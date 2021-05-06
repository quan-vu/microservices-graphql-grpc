import os


class Setting:

    DB_DRIVER = os.getenv('DB_DRIVER', 'cassandra')
    DB_HOST = os.getenv('DB_HOST', 'localhost')
    DB_PORT = os.getenv('DB_PORT', '9042')
    DB_USER = os.getenv('DB_USER', 'cassandra')
    DB_PASSWORD = os.getenv('DB_PASSWORD', 'cassandra')


setting = Setting()