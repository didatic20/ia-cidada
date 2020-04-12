from flask import Flask, jsonify, request
from flask_pymongo import PyMongo
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import JWTManager

app = Flask(__name__)
app.config.from_object('config')
# Configure DB MongoDB
mongo = PyMongo(app)
# Configure JWT
jwt = JWTManager(app)

from .components.jwt import jwt

from .routes import routes
