const express = require('express');

const { routerLogin } = require('../controllers/atlas/loginController');
const { routerAuthentication} = require('../controllers/ifood/authenticationController');
const { routerMerchantCatalog } = require('../controllers/ifood/merchantCatalogController');
const { routerMerchant } = require('../controllers/ifood/merchantMerchantController');
const { routerMerchantOrder } = require('../controllers/ifood/merchantOrderController');
const { routerAuth } = require('../controllers/atlas/authorizationController');

const UserController = require('../controllers/UserController');
const AddressController = require('../controllers/AddressController');

const routers = express.Router();

routers.use('/login', routerLogin);
routers.use('/authorization', routerAuth);
routers.use('/merchant/authentication', routerAuthentication);
routers.use('/merchant/catalog', routerMerchantCatalog);
routers.use('/merchant/merchant', routerMerchant);
routers.use('/merchant/order', routerMerchantOrder);

routers.post('/register', UserController.store);
routers.get('/userss', UserController.index);
routers.post('/users/:user_id/address', AddressController.store);

module.exports = routers;