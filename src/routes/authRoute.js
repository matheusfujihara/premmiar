const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const authConfig = require('../config/auth.json');

const authRoute = {
    post: async (req, res) => {
        const { email } = req.body;

        try {
            if (await User.findOne({ email }))
                return res.status(403).send({ error: 'User already exists' });

            const user = await User.create(req.body);

            user.password = undefined;


            return res.send({ 
                user,
                token: generateToken({ id: user.id, email: user.email }),
            });

        } catch(err) {
            console.log(err);
            return res.status(403).send({ error: 'Registration failed', err});
        }
    },
    login: async (req, res) => {
        const { email, password } = req.body;

        const user = await User.findOne({ email }).select('+password');
        if (!user)
            return res.status(403).send({ error: 'User not found' });

        if(!await bcrypt.compare(password, user.password))
            return res.status(403).send({ error: 'Invalid password' });

        user.password = undefined;
        
        res.send({ 
            user, 
            token : generateToken({ id: user.id, email: user.email }),
            response: "sucess"
        });
    },
    
}

function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400,
    })
}

module.exports = authRoute;