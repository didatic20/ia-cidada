import json
from app import mongo
from flask import jsonify
from bson.json_util import dumps
from bson.objectid import ObjectId

class User():
    db = mongo.db.users
    def __init__(self):
        self.name = ''
        self.lastname = ''
        self.email = ''
        self.pwd = ''
        self.age = ''
        self.gender = ''
    
    @staticmethod
    def find(filterSearch={}):
        '''
        *Author: Iago Rocha*\n
        Find objects with data search by filterSearch parameters
        - Param 0: dict | Dictionary with arguments to search data
        - Return: string | List of objects reference of data wanted

        Example( find(filterSearch={'age' : '27', 'gender': 'male'}) )
        '''
        try:
            users = dumps(User.db.find(filter))
            return users
        except Exception as e:
            print('[Error: ]', e)
            return dumps([])
    
    def create(self):
        
        try:
            pass
        except expression as identifier:
            pass
    
    def update(self, id):
        
        try:
            pass
        except expression as identifier:
            pass

    def delete(self, id):

        try:
            pass
        except expression as identifier:
            pass

    def toStructObject():
        objectUser = {
            'name': self.name,
            'lastname': self.lastname,
            'email': self.email,
            'pwd': self.pwd,
            'age': self.age
        }
        return objectUser