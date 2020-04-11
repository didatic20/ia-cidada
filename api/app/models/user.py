import json
from app import mongo
from flask import jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from bson.json_util import dumps
from bson.objectid import ObjectId
from datetime import datetime
from config import MESSAGE_INTERNAL_ERROR



class User():
    db = mongo.db.users
    def __init__(self):
        self.name = ''
        self.lastname = ''
        self.email = ''
        self.pwd = ''
        self.age = ''
        self.gender = ''
    
    @classmethod
    def find(self, filterSearch={}):
        '''
        *Author: Iago Rocha*\n
        Find objects with data search by filterSearch parameters
        - Param 0: dict | Dictionary with arguments to search data
        - Return: list | List of objects reference of data wanted

        Example( find(filterSearch={'age' : '27', 'gender': 'male'}) )
        '''
        try:
            users = dumps(User.db.find(filterSearch, { "password": False }))
            users = json.loads(users)
            for user in users:
                user['_id'] = user["_id"]['$oid']
            return users
        except Exception as e:
            print('[Error: ]', e)
            return []
    
    @classmethod
    def find_one(self, _id):
        try:
            user = dumps(User.db.find_one({"_id": ObjectId(_id)}, { "password": False }))
            user = json.loads(user)
            user['_id'] = user["_id"]['$oid']      
            return user
        except Exception as e:
            print('[Error: ]', e)
            return {}
    
    @classmethod
    def create(self, dictUser):        
        try:
            # Validate User            
            validate = self.validate(dictUser)
            if(validate != True):
                return validate
            # Check if exist user in database
            user = self.find({ "email": dictUser['email']})
            if(user != []):
                return ("Esse usuário já existe", 400 )       
            # Generate password hash
            dictUser['password'] = generate_password_hash(dictUser['password'])
            # Generate created and updated at with datetime
            strDatetime = str(datetime.now())
            dictUser['created_at'] = strDatetime
            dictUser['updated_at'] = strDatetime
            # Insert User in database
            User.db.insert_one(dictUser)                        
            return ("Usuário criado com sucesso", 201)
        except Exception as e:
            print(e)
            return (MESSAGE_INTERNAL_ERROR, 500)
    
    @classmethod
    def update(self, _id, dictUser):        
        try:
            user = User.db.find_one({"_id": ObjectId(_id)})
            if(user is None):
                return "Usuário não encontrado.", 404
            updatePassword = 'password' in dictUser
            for key in dictUser:
                user[key] = dictUser[key]
            validate = self.validate(user)
            if(validate != True):
                return validate
            if(updatePassword is True):
                # Generate password hash
                user['password'] = generate_password_hash(user['password'])
            # Generate updated at with datetime 
            user['updated_at'] = str(datetime.now())
            # Remove _id key
            del user['_id']
            # Update User in database
            User.db.update_one({"_id": ObjectId(_id)}, {'$set': user })
            return "Usuário atualizado com sucesso.", 200
        except Exception as e:
            print(e)
            return (MESSAGE_INTERNAL_ERROR, 500)
    
    @classmethod
    def delete(self, _id):
        try:
            user = User.db.delete_one({"_id": ObjectId(_id)})
            print("DELETE: ", user)
            return "Usuário excluído com sucesso.", 200
        except Exception as e:
            print(e)
            return (MESSAGE_INTERNAL_ERROR, 500)

    def validate(dictUser):
        try:
            if(dictUser['name'] == ""):
                return 'Você precisa informar um nome!', 400
            if(dictUser['password'] == "" or len(dictUser['password']) < 6):
                return 'Você precisa informar uma senha válida, com no mínimo 6 caracteres', 400
            if(not '@' in dictUser['email']):
                return 'O e-mail informado não é válido', 400
            if(not '.' in dictUser['email'].split('@')[1]):
                return 'O e-mail informado não é válido', 400
            return True
        except Exception as e:
            print(e)
            return MESSAGE_INTERNAL_ERROR, 500
       
