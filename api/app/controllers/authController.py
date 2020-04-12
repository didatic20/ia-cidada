from flask import request
from .controller import Controller
from app.messages import HTTP_400_BAD_REQUEST, MSG_INVALID_CREDENTIALS, MSG_TOKEN_CREATED
from app.models.user import User


class AuthController(Controller):

    @classmethod
    def login(self):
        try:
            jsonData = request.json
            
            if ("email" in jsonData and "password" in jsonData):
                codeStatus, dictResponse = User.authentication(jsonData['email'], jsonData['password'])
                return self.buildResponse(codeStatus, dictResponse)                
            else:    
                return self.buildResponse(400, { 'message': HTTP_400_BAD_REQUEST })
        except Exception as e:
            print(e)
            return self.handleErrors()