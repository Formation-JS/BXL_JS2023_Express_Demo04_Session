const homeController = require('../controllers/home.controller');


const homeRouter = require('express').Router();

homeRouter.get('/', homeController.index);
homeRouter.get('/about', homeController.about);
homeRouter.get('/protected', homeController.protected);
homeRouter.get('/error', homeController.error);

module.exports = homeRouter;