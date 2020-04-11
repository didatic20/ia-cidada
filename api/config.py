import string
import random

randomStr = string.ascii_letters + string.digits + string.ascii_uppercase
key = ''.join(random.choice(randomStr) for i in range(12))
DEBUG = True
SECRET_KEY = key
JSON_AS_ASCII = False
MONGO_URI = 'mongodb://api:1234@localhost:27017/iaCidada'
MESSAGE_INTERNAL_ERROR = 'Houve um erro ao processar sua solicitação, se o mesmo persistir entre em contato com os administradores!'