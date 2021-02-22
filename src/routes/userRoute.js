const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const User = require('../models/user');
const router = express.Router();
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');

// Utiliza o middleware para validar as requisicoes nas rotas abaixo

// router.use(authMiddleware);

// Funcionalidades do tipo GET, PUT, DELETE
// So podem ser utilizado pelo admin ou pelo propio usuario

const userRoute = {
    get: async (req, res) => {
        try {
            // const decoded = decodedToken(req.headers.authorization);

            // if (decoded.email !== "admin@admin.com")
            //     res.status(401).send({ error: 'Unauthorized! Its necessary to be an administrator.'});

            const users = await User.find();
    
            return res.send({ users });
        } catch (err) {
            return res.status(403).send({ error: 'Error loading users' });
        }
    },
    put: async (req, res) => {
        try {
            const { name, email} = req.body;
            const { userEmail } = req.params;
            // const user = await User.find({ email: userEmail });
            // const decoded = decodedToken(req.headers.authorization);

            // if (decoded.email !== user.email) {
            //     if (decoded.email == "admin@admin.com") {
            //         await User.findByIdAndUpdate({ email: userEmail }, { 
            //             name, 
            //             email
            //         });
            //         res.send({ user });
            //     }           
            //     res.status(401).send({ error: 'Unauthorized! Its necessary to be an administrator.'});                    
            // }

            user = await User.findOneAndUpdate({ email: userEmail }, { 
                name, 
                email
            });
    
            await user.save();
    
            res.send({ user });
    
        } catch (err) {
            console.log(err);
            return res.status(400).send({ error: 'Error updating user' });
        }
    },
    delete: async (req, res) => {
        try {
            const { userEmail } = req.params;
            // const user = await User.find({ email: userEmail });
            // const decoded = decodedToken(req.headers.authorization);

            // if (decoded.email !== user.email) {
            //     if (decoded.email == "admin@admin.com") {
            //         await User.findByIdAndRemove({ email: userEmail });
            //         return res.status(200).send({ success: true, response: 'Successfully delete'});
            //     }

            //     res.status(401).send({ error: 'Unauthorized! Its necessary to be an administrator.'});                    
            // }

            await User.findOneAndRemove({ email: userEmail });
    
            return res.status(200).send({ success: true, response: 'Successfully delete'});
        } catch (err) {
            return res.status(403).send({ error: 'Error deleting user' });
        }
    },
    getUser: async (req, res) => {
        try {
            // const decoded = decodedToken(req.headers.authorization);
            // if (decoded.email !== "admin@admin.com")
            //     res.status(401).send({ error: 'Unauthorized! Its necessary to be an administrator.'});

            const user = await User.find({ email: userEmail });
    
            return res.send({ user });
        } catch (err) {
            return res.status(403).send({ error: 'Error loading user' });
        }
    }
}

function decodedToken(header) {
    return jwt.verify(header.split(' ')[1], authConfig.secret);
};

module.exports = userRoute;