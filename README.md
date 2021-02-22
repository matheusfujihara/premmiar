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

## LISTAGEM DE ROTAS

### POST

* /user 	= Realiza o cadastro de um novo usuário.
* /login 	= Realiza o login de um usuário e retorna um token de acesso.

* O token será utilizado para validar alguams rotas.
* Token do tipo Authorization, coloque a palavra `Bearer **TOKEN**` no header.

### GET

* /user         = Retorna todos os usuários cadastrados.
* /user/:userId	= Retorna um usuário específico.

### PUT

* /user/:userId = Atualiza os dados de um usuário especifico.

### DELETE

* /user/:userId = Deleta um usuário específico.