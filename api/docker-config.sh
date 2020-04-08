# Additional commands to configuration docker 

mongo iaCidada -u root -p abc123 --authenticationDatabase admin --eval "db.createUser({ user: 'api', pwd: '1234', roles: [ { role: 'readWrite', db: 'iaCidada'}]});"