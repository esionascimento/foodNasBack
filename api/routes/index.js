const express = require('express');

const { routerUser } = require('../controllers/registerController');
const { routerLogin } = require('../controllers/loginController');

const routers = express.Router();

routers.use('/register', routerUser);
routers.use('/login', routerLogin);

module.exports = routers;