const Joi = require('joi');

const validateLogin = (req, res, next) => {
  const { error } = Joi.object({
    email: Joi.string().email({ minDomainSegments: 2 }).required(),
    password: Joi.string()
    .pattern(new RegExp('^([`~!@#$%^&*()\/a-zA-Z0-9 \t]{6,30})$'))
  }).validate(req.body);

  if (error) {
    console.log('error :', error);
    return res.status(400).json({message: error.details[0].message});
  }

  next();
};

module.exports = { validateLogin };
