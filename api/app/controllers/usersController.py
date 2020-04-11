from flask import request, jsonify
from bson.objectid import ObjectId
from .controller import Controller
from app.models.user import User

class UsersController(Controller):

   
    @classmethod
    def index(self, _id):
        try:
            if(_id != None):
                users = User.find_one(_id)
            else:
                users = User.find()
            return self.buildResponse(200, users)
        except Exception as e:
            print(e)
            return self.handleErrors()    

    @classmethod
    def create(self):
        try:
            jsonData = request.json
            if ("name" in jsonData and "email" in jsonData and "password" in jsonData):
                (message, statusCode) = User.create(jsonData)       
                return self.buildResponse(statusCode, {"message": message})            
            else:
                return self.buildResponse(400, { 'message': 'Dados inváĺidos!' })
        except Exception as e:
            print(e)
            return self.handleErrors()

    @classmethod
    def update(self, _id):
        try:
            if(not len(_id) == 24):
                return self.buildResponse(400, { 'message': 'ID inváĺido!' })
            jsonData = request.json
            (message, statusCode) = User.update(_id, jsonData)
            return self.buildResponse(statusCode, {"message": message})
        except Exception as e:
            print(e)
            return self.handleErrors()

    @classmethod
    def delete(self, _id):
        try:
            if(not len(_id) == 24):
                return self.buildResponse(400, { 'message': 'ID inváĺido!' })
            (message, statusCode) = User.delete(_id)
            return self.buildResponse(statusCode, {"message": message})
        except Exception as e:
            print(e)
            return self.handleErrors()