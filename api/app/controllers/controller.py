from flask import jsonify, json, Response
from app.messages import MSG_INTERNAL_ERROR, MSG_PERMISSION_DENIED

class Controller(object):

    @classmethod
    def buildResponse(self, intStatus, dictResponse=None, dictHeaders=None):
        '''
        *Author: Iago Rocha*
        Create a Flask Response object with custom headers
        - Param 0: int | status code of response object
        - Param 1: dict | a dict that will be cast to a json string
        - Param 2: dict | dict within header and value. Ex.: {'IA-Cidada-API-Version' : '1.0.0'}
        - Return: object | a Flask Response object 
        '''
        # create a response object
        objResponse = Response()
        # set a response json
        objResponse.response = json.dumps(dictResponse, sort_keys=False)
        # config content type
        objResponse.content_type = 'application/json'
        # set headers response
        objResponse.headers['IA-Cidada-API-Version'] = '1.0.0'

        # verify if headers is a dict instance
        if isinstance(dictHeaders, dict):
            # loop to add headers
            for strKey, strValue in dictHeaders.iteritems():
                # add header and value to response object
                objResponse.headers[strKey] = strValue

        # set status return
        objResponse.status = str(intStatus)
        # return a Response object
        return objResponse
    
    @classmethod
    def handleErrors(self):
        return self.buildResponse(500, { 'message': MSG_INTERNAL_ERROR})
    
    @classmethod
    def responseNotAllowedUser(self):
        return self.buildResponse(401, { 'message': MSG_PERMISSION_DENIED})