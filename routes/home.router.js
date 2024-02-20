const homeController = require('../controllers/home.controller');


const homeRouter = require('express').Router();

homeRouter.get('/', homeController.index);
homeRouter.get('/about', homeController.about);
homeRouter.get('/protected', homeController.protected);

module.exports = homeRouter;