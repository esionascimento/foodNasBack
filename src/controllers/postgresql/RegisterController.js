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
  
      const { id, first_name, email, id_store } = resultRegister;

      return res.json({ id, first_name, email, id_store });
    } catch(err) {
      return res.status(500).json({ message: 'Error api: ', err });
    }
  },

  async deleteAll(_req, res) {
    const users = await User.destroy({ truncate: { cascade: true } });
    return res.json(users);
  },

  async updateOne(req, res) {
    const { user_id: id } = req.params;
    const { first_name } = req.body;
    const users = await User.update({ first_name }, {
      where: {
        id
      }
    });
    return res.json(users);
  },
};
