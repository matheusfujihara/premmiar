## OBJETIVO
Deverá construir uma API utilizando a tecnologia NodeJS e o front-end utilizar o ReactJS.

## REQUISITOS
* Criar um CRUD de qualquer coisa.

## STACK

* "bcryptjs": "^2.4.3",
* "express": "^4.17.1",
* "jsonwebtoken": "^8.5.1",
* "mongoose": "^5.11.17",
* "nodemon": "^2.0.7"


## ORGANIZACAO DO PROJETO

* /src
    - /config
        - /auth.json
        - /database.js
        - /index.js
    - /middlewares
        - authMiddleware.js
    - /models
        - user.js
    - /routes
        - authRoute.js
        - userRoute.js
        - index.js
* server.js
