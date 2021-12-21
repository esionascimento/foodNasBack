const Joi = require('joi');

const validateUser = (req, res, next) => {
  const { error } = Joi.object({
    name: Joi.string().min(3).max(20).required(),
    email: Joi.string().email({ minDomainSegments: 2 }).required(),
    password: Joi.string()
    .pattern(new RegExp('^([`~!@#$%^&*()\/a-zA-Z0-9 \t]{6,30})$')),
    idStore: Joi.string().min(36).max(36).required()
  }).validate(req.body);
  
  if (error) return res.status(400).json({message: error.details[0].message});

  next();
};

module.exports = validateUser;