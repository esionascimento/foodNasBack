const express = require('express');

const { routerUser } = require('../controllers/registerController');
const { routerLogin } = require('../controllers/loginController');
const { routerAuthentication} = require('../controllers/authenticationController')
const { routerMerchantCatalog } = require('../controllers/merchantCatalogController')

const routers = express.Router();

routers.use('/register', routerUser);
routers.use('/login', routerLogin);
routers.use('/authentication', routerAuthentication)
routers.use('/merchant/catalog', routerMerchantCatalog)

module.exports = routers;