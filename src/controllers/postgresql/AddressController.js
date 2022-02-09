const User = require('../../models/UserModel');
const Address = require('../../models/AddressModel');

module.exports = {
  async index(req, res) {
    const { user_id } = req.params;

    const user = await User.findByPk(user_id, {
      include: { association: 'addresses' }
    });

    return res.json(user);
  },

  async store(req, res) {
    const { user_id } = req.params;
    const { city, state, street, number, district } = req.body;

    const user = await User.findByPk(user_id);

    if(!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    try {
      const address = await Address.create({
        user_id, city, state, street, number, district
      });
      return res.json(address);
    } catch(err) {
      console.log('address :', err);
    }
  }
};
