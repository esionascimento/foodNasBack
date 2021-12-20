const express = require('express');

const controllerRegister = require('../controllers/controllerRegister');

const routers = express.Router();

routers.use('/register', controllerRegister);

module.exports = routers;