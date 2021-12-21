const express = require('express');
const rescue = require('express-rescue');
const { validateLogin } = require('../middlewares/validate/login');

const { loginService } = require('../services/loginService');

const routerLogin = express.Router();

routerLogin.post('/', validateLogin, rescue(async (req, res, next) => {
  const result = await loginService(req.body);
  if (result.isError) {
    return next(result);
  }
  const { _id, name, email, token } = result;
  return res.status(200).json({message: 'Login success', _id, name, email, token});
}));

module.exports = { routerLogin };
