const User = require('../models/UserModel');
const bcrypt = require('bcrypt');
require('dotenv').config();

const registerService = async (body) => {
  const { username, email, password, id_store } = body;
  
  const saltRounds = Number(process.env.SALT);
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(password, salt);

  const result = await User.create({ username, email, password: hash, id_store });
  console.log('result :', result);

  if (result.isError) {
    return result;
  }

  return result.dataValues;
}

module.exports = { registerService };
