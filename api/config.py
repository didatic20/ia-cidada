import string
import random

randomStr = string.ascii_letters + string.digits + string.ascii_uppercase
key = ''.join(random.choice(randomStr) for i in range(12))
DEBUG = True
SECRET_KEY = key