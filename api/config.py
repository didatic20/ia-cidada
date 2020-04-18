import os, string, random
from datetime import timedelta

randomStr = string.ascii_letters + string.digits + string.ascii_uppercase

SECRET_KEY = ''.join(random.choice(randomStr) for i in range(12))
DEBUG = True
JSON_AS_ASCII = False
JWT_ACCESS_TOKEN_EXPIRES = timedelta(minutes=60)
JWT_REFRESH_TOKEN_EXPIRES= timedelta(days=30)

MONGO_USER = os.environ.get('MONGO_USER')
MONGO_PASSWORD = os.environ.get('MONGO_PASSWORD')
MONGO_URI = 'mongodb+srv://{0}:{1}@ia-cidada-crwjl.mongodb.net/IA-Cidada?retryWrites=true&w=majority'.format(MONGO_USER, MONGO_PASSWORD)