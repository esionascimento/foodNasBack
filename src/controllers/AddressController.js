const User = require('../models/UserModel');
const Address = require('../models/AddressModel');

module.exports = {
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