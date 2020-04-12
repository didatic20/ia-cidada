from app import app, mongo
from datetime import datetime
from flask import jsonify, request
from flask_jwt_extended import get_jwt_identity, jwt_required

# Importing Models
from app.models.user import User
# Importing Controllers
from app.controllers.controller import Controller
from app.controllers.authController import AuthController
from app.controllers.usersController import UsersController


""" 
STORE VISITED URLS
"""
@app.after_request
def store_visited_urls(response):
    visitedUrl = {
        "url": request.url,
        "headers": dict(request.headers),
        "created_at": str(datetime.now()),
    }
    mongo.db.visitedUrls.insert(visitedUrl)
    return response

""" 
PUBLIC ROUTES
"""
@app.route('/', methods=["GET"])
def index():
    return Controller.buildResponse(200, {'message': 'API - IA Cidada!'})

@app.errorhandler(404)
def not_found(error=None):
    message = {
        'status': 404,
        'message': 'Route not found: ' + request.url
    }
    return Controller.buildResponse(404, message)

@app.route('/user/create', methods=['POST'])
def createUser():
    return UsersController.create()

@app.route('/auth', methods=["POST"])
def auth():
    return  AuthController.login()

""" 
PRIVATE ROUTES
"""

# USERS
@app.route('/users', methods=['GET'])
@app.route('/user/<id>', methods=['GET'])
@jwt_required
def users(id=None):
    return UsersController.index(id)

@app.route('/user/update/<id>', methods=['PUT'])
@jwt_required
def updateUser(id):
    return UsersController.update(id)

@app.route('/user/delete/<id>', methods=['DELETE'])
@jwt_required
def deleteUser(id):
    return UsersController.delete(id)

# AUTH
@app.route('/auth/check')
@jwt_required
def checkToken():
    return jsonify({"check": True}), 200

# CHAT
@app.route('/chat/responses', methods=["POST"])
@jwt_required
def saveResponses():
    token = get_jwt_identity()
    print(token)
    return jsonify(token), 200
