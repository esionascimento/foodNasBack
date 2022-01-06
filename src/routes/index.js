const express = require('express');

const { routerAuthentication} = require('../controllers/ifood/authenticationController');
const { routerMerchantCatalog } = require('../controllers/ifood/merchantCatalogController');
const { routerMerchant } = require('../controllers/ifood/merchantMerchantController');
const { routerMerchantOrder } = require('../controllers/ifood/merchantOrderController');
const { routerAuth } = require('../controllers/atlas/authorizationController');

const RegisterController = require('../controllers/RegisterController');
const AddressController = require('../controllers/AddressController');
const LoginController = require('../controllers/LoginController');

const routers = express.Router();

routers.use('/authorization', routerAuth);
routers.use('/merchant/authentication', routerAuthentication);
routers.use('/merchant/catalog', routerMerchantCatalog);
routers.use('/merchant/merchant', routerMerchant);
routers.use('/merchant/order', routerMerchantOrder);

routers.post('/register', RegisterController.store);
routers.get('/userss', RegisterController.index);
routers.post('/users/:user_id/address', AddressController.store);
routers.post('/login', LoginController.login);

module.exports = routers;