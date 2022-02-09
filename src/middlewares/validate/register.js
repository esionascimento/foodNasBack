const Joi = require('joi');
const { errorRegisterJoi } = require('../constructError');

const validateUser = (req) => {
  const { error } = Joi.object({
    first_name: Joi.string().min(3).max(20).required(),
    last_name: Joi.string().min(3).max(20).required(),
    email: Joi.string().email({ minDomainSegments: 2 }).required(),
    birth_date: Joi.string(),
    cnpj: Joi.string(),
    password: Joi.string()
    .pattern(new RegExp('^([`~!@#$%^&*()\/a-zA-Z0-9 \t]{6,30})$')),
    password_again: Joi.string()
    .pattern(new RegExp('^([`~!@#$%^&*()\/a-zA-Z0-9 \t]{6,30})$')),
    id_store: Joi.string().min(36).max(36).required()
  }).validate(req.body);

  if (error) {
    return errorRegisterJoi(error.details[0].message);
  }
  return {isError: false}
};

module.exports = { validateUser };