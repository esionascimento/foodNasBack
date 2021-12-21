const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

const { login } = require('../models/loginModel');
const { errorEmailInvalid, errorPasswordInvalid } = require('../middlewares/constructError');

const loginService = async ({ email, password }) => {
  const result = await login(email);
  if (!result) {
    return errorEmailInvalid('Error: email não registrado');
  }
  console.log('result :', result);
  const { _id, name } = result;
  const { password: hash } = result;
  if (bcrypt.compareSync(password, hash)) {
    const token = await jwt.sign({ _id, name, email }, process.env.SECRET, {
      expiresIn: 3000
    })
    return {
      _id,
      name,
      email,
      token
    };
  }
  return errorPasswordInvalid('Error: password invalid');
};

module.exports = { loginService };