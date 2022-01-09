const User = require('../../models/UserModel');
const { registerService } = require('../../services/RegisterService');
const { validateUser } = require('../../middlewares/validate/register');

module.exports = {
  async index(_req, res) {
    const users = await User.findAll();
    return res.json(users)
  },
  async store(req, res, next) {
    try {
      const resultJoi = validateUser(req);

      if (resultJoi.isError) {
        return next(resultJoi);
      }
  
      const resultRegister = await registerService(req.body);
  
      const { id, username, email, id_store } = resultRegister;

      return res.json({ id, username, email, id_store });
    } catch(err) {
      console.log('err :', err);
    }
  }
};
