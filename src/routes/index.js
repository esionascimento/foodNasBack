const express = require('express');

const { routerAuthentication} = require('../controllers/ifood/authenticationController');
const { routerMerchantCatalog } = require('../controllers/ifood/merchantCatalogController');
const { routerMerchant } = require('../controllers/ifood/merchantMerchantController');
const { routerMerchantOrder } = require('../controllers/ifood/merchantOrderController');

const RegisterController = require('../controllers/postgresql/RegisterController');
const AddressController = require('../controllers/postgresql/AddressController');
const LoginController = require('../controllers/postgresql/LoginController');
const AuthorizationController = require('../controllers/postgresql/AuthorizationController');
const StoreHoursController = require('../controllers/postgresql/StoreHoursController');

const routers = express.Router();

routers.get('/authorization', AuthorizationController.Authorization);

routers.get('/register', RegisterController.index);
routers.post('/register', RegisterController.store);
routers.delete('/register', RegisterController.deleteAll);
routers.put('/register/:user_id', RegisterController.updateOne);

routers.post('/store_hours/:user_id', StoreHoursController.store);
routers.get('/store_hours/:user_id', StoreHoursController.index);

routers.post('/login', LoginController.login);

routers.post('/users/:user_id/address', AddressController.store);
routers.get('/users/:user_id/address', AddressController.index);

routers.use('/merchant/authentication', routerAuthentication);
routers.use('/merchant/catalog', routerMerchantCatalog);
routers.use('/merchant/merchant', routerMerchant);
routers.use('/merchant/order', routerMerchantOrder);

module.exports = routers;