const authController = require('../controllers/auth.controller');


const authRouter = require('express').Router();

authRouter.get('/register', authController.register);
authRouter.post('/register', authController.register_POST);

authRouter.get('/login', authController.login);
authRouter.post('/login', authController.login_POST);

authRouter.get('/logout', authController.logout);

module.exports = authRouter;