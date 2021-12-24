const express = require('express');

const { routerUser } = require('../controllers/registerController');
const { routerLogin } = require('../controllers/loginController');
const { routerAuthentication} = require('../controllers/authenticationController')

const routers = express.Router();

routers.use('/register', routerUser);
routers.use('/login', routerLogin);
routers.use('/authentication', routerAuthentication)

module.exports = routers;