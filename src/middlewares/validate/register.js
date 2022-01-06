const Joi = require('joi');
const { errorRegisterJoi } = require('../constructError');

const validateUser = (req) => {
  const { error } = Joi.object({
    username: Joi.string().min(3).max(20).required(),
    email: Joi.string().email({ minDomainSegments: 2 }).required(),
    password: Joi.string()
    .pattern(new RegExp('^([`~!@#$%^&*()\/a-zA-Z0-9 \t]{6,30})$')),
    id_store: Joi.string().min(36).max(36).required()
  }).validate(req.body);

  if (error) {
    return errorRegisterJoi(error.details[0].message);
  }
  return {isError: false}
};

module.exports = { validateUser };