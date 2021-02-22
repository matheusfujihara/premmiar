const express = require('express');
const router = express.Router();
const userRoute = require('./userRoute');
const authRoute = require('./authRoute');

router.post('/user', async (req, res, next) => {
    await authRoute.post(req, res);
});

router.post('/login', async (req, res, next) => {
    await authRoute.login(req, res);
});

router.get('/user', async (req, res, next) => {
    await userRoute.get(req, res);
});

router.get('/user/:userId', async (req, res, next) => {
    await userRoute.getUser(req, res);
});

router.put('/user/:userId', async (req, res, next) => {
    await userRoute.put(req, res);
});

router.delete('/user/:userId', async (req, res, next) => {
    await userRoute.delete(req, res);
});

module.exports = router;