const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { errorPasswordInvalid } = require('../middlewares/constructError');
require('dotenv').config();

const User = require('../models/UserModel');

const LoginService = async ({ email, password }) => {
  const resultLogin = await User.findOne({ where: { email: email}});

  const { id, username, id_store } = resultLogin.dataValues;
  const { password: hash } = resultLogin.dataValues;

  if (bcrypt.compareSync(password, hash)) {
    const token = await jwt.sign({ id, username, email }, process.env.SECRET, {
      expiresIn: 3000
    })
    return {
      id,
      username,
      email,
      id_store,
      token
    };
  }
  return errorPasswordInvalid('Error: Login password');
};

module.exports = { LoginService };
