const express = require('express');
const rescue =  require('express-rescue');
/* const User = require('../../models/UserModel'); */

const { createService, getAll } = require('../../services/registerService');
const validateUser = require('../../middlewares/validate/register');

const routerUser = express.Router();

routerUser.get('/', rescue(async (_req, res) => {
  const resultAll = await getAll();
  return res.status(200).json(resultAll);
}));

routerUser.post('/', validateUser, rescue(async (req,res, next) =>{
  const result = await createService(req.body);

  if(result.isError) {
    return next(result);
  };

  return res.status(200).json({message: 'usuario criado com sucesso', token});
}));

module.exports = { routerUser };