const { create, getAll } = require('../models/registerModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { errorRegister } = require('../middlewares/constructError');
require('dotenv').config();

const createService = async (body) => {
  const {name, email, password, idStore} = body;
  const secret = process.env.SECRET;
  const saltRounds = Number(process.env.SALT);
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(password, salt);

  const result = await create(name, email, hash, idStore);

  if (result.isError) {
    return result;
  }

  if (!result.acknowledged) {
    return errorRegister('Error: register falid');
  }

  return token = jwt.sign({name, email}, secret, {expiresIn: '45m'});
}

module.exports = {
  createService,
  getAll,
}