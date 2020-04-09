from app import app, mongo
from flask import jsonify
from app.models.user import User

@app.route('/', methods=["GET"])
def index():
    return jsonify({'message': 'API - IA Cidada!'})


@app.errorhandler(404)
def not_found(error=None):
    message = {
        'status': 404,
        'message': 'Route not found: ' + request.url
    }
    return jsonify(message), 404

@app.route('/users', methods=['GET'])
def users():
    return User.find()
