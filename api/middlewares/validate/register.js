const Joi = require('joi');

const validateUser = (req, res, next) => {
  const { error } = Joi.object({
    name: Joi.not().empty().required(),
    email: Joi.not().empty().required(),
    password: Joi.not().empty().required(),
    idStore: Joi.not().empty().required(),
  }).validate(req.body);
  
  if (error) return res.status(400).json({message: error.details[0].message});

  next();
};

module.exports = validateUser;