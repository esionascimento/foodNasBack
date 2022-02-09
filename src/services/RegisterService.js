const User = require('../models/UserModel');
const bcrypt = require('bcrypt');
require('dotenv').config();

const registerService = async (body) => {
  const { first_name, last_name, email, birth_date, cnpj, id_store, password } = body;
  
  const saltRounds = Number(process.env.SALT);
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(password, salt);

  const result = await User.create({ first_name, last_name, email, birth_date, cnpj, id_store, password: hash });

  if (result.isError) {
    return result;
  }

  return result.dataValues;
}

module.exports = { registerService };
