from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_pymongo import PyMongo
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import JWTManager

app = Flask(__name__)

cors = CORS(app, resources={r"*": {"origins": ["http://127.0.0.1:8100", "http://localhost:8100"]}})
app.config.from_object('config')

# Configure CORS
#cors = CORS(app, { "origins": ['http://localhost:5000', 'http://localhost:8100'] })
# Configure DB MongoDB
mongo = PyMongo(app)
# Configure JWT
jwt = JWTManager(app)

from .components.jwt import jwt

from .routes import routes
