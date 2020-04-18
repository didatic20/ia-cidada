import string
import random
from datetime import timedelta

randomStr = string.ascii_letters + string.digits + string.ascii_uppercase
key = ''.join(random.choice(randomStr) for i in range(12))

SECRET_KEY = key
DEBUG = True
JSON_AS_ASCII = False
MONGO_URI = 'mongodb://api:1234@ia-cidada-mongo:27017/iaCidada'
JWT_ACCESS_TOKEN_EXPIRES = timedelta(minutes=60)
JWT_REFRESH_TOKEN_EXPIRES= timedelta(days=30)
