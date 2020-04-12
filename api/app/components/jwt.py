from app import jwt
from app.messages import MSG_INVALID_CREDENTIALS, MSG_TOKEN_EXPIRED
from app.controllers.controller import Controller
from app.models.user import User


@jwt.user_claims_loader
def addClaimsToAccessToken(identity):
    print('PASSEI POR AQUI')

@jwt.expired_token_loader
def myExpiredTokenCallback():    
    return Controller.buildResponse(401, {'message': MSG_TOKEN_EXPIRED})

@jwt.unauthorized_loader
def myUnauthorizedCallback(e):
    return Controller.buildResponse(401, {"message": MSG_INVALID_CREDENTIALS, "description": e})

@jwt.claims_verification_loader
def myClaimsVerificationCallback(e):
    return Controller.buildResponse(401, {"message": MSG_INVALID_CREDENTIALS, "description": e})

@jwt.token_in_blacklist_loader
def myTokenInBlacklistCallback(e):
    return Controller.buildResponse(401, {"message": MSG_INVALID_CREDENTIALS, "description": e})

@jwt.claims_verification_failed_loader
def mwClaimsVerificationFailedCallback(e):
    return Controller.buildResponse(401, {"message": MSG_INVALID_CREDENTIALS, "description": e})