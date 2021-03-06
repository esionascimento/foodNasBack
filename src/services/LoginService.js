const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { errorPasswordInvalid, errorEmailInvalid } = require('../middlewares/constructError');
require('dotenv').config();

const User = require('../models/UserModel');

const LoginService = async ({ email, password }) => {
  try {
    const resultLogin = await User.findOne({ where: { email: email}});
    
    if (!resultLogin) {
      return errorEmailInvalid('Error: Login email');
    }
    
    const { id, first_name, id_store } = resultLogin.dataValues;
    const { password: hash } = resultLogin.dataValues;
    
    if (bcrypt.compareSync(password, hash)) {
      const token = await jwt.sign({ id, first_name, email }, process.env.SECRET, {
        expiresIn: 28800
      })
      return {
        id,
        first_name,
        email,
        id_store,
        token
      };
    }
    return errorPasswordInvalid('Error: Login password');
  } catch (error) {
    console.log('errorLoginService :', error);
  }
};

module.exports = { LoginService };
