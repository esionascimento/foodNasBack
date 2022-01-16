const User = require('../../models/UserModel');
const Address = require('../../models/AddressModel');

module.exports = {
  async index(req, res) {
    const { user_id } = req.params;
    console.log('user_id :', user_id);

    const user = await User.findByPk(user_id, {
      include: { association: 'addresses' }
    });

    return res.json(user);
  },

  async store(req, res) {
    const { user_id } = req.params;
    const { zipcode, street, number } = req.body;

    const user = await User.findByPk(user_id);

    if(!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    try {
      const address = await Address.create({
        zipcode,
        street,
        number,
        user_id
      });
      return res.json(address);
    } catch(err) {
      console.log('address :', err);
    }
  }
};