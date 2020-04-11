from app import app, mongo
from datetime import datetime
from app.models.user import User
from flask import jsonify, request
from app.controllers.usersController import UsersController

@app.route('/', methods=["GET"])
def index():
    return jsonify({'message': 'API - IA Cidada!'})

@app.after_request
def store_visited_urls(response):
    visitedUrl = {
        "url": request.url,
        "headers": dict(request.headers),
        "created_at": str(datetime.now()),
    }
    mongo.db.visitedUrls.insert(visitedUrl)
    return response

@app.errorhandler(404)
def not_found(error=None):
    message = {
        'status': 404,
        'message': 'Route not found: ' + request.url
    }
    return jsonify(message), 404

@app.route('/users', methods=['GET'])
@app.route('/user/<id>', methods=['GET'])
def users(id=None):
    return UsersController.index(id)

@app.route('/user/create', methods=['POST'])
def createUser():
    return UsersController.create()

@app.route('/user/update/<id>', methods=['PUT'])
def updateUser(id):
    return UsersController.update(id)

@app.route('/user/delete/<id>', methods=['DELETE'])
def deleteUser(id):
    return UsersController.delete(id)