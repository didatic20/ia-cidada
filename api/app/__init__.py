from flask import Flask, jsonify, request
from flask_pymongo import PyMongo
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
app.config.from_object('config')

mongo = PyMongo(app)

from .routes import routes
