const User = require('../../models/UserModel');
const StoreHours = require('../../models/StoreHoursModel');

module.exports = {
  async index(req, res) {
    const { user_id } = req.params;

    const user = await User.findByPk(user_id, {
      include: { association: 'storehours' }
    });

    return res.json(user);
  },

  async store(req, res) {
    const { user_id } = req.params;
    const { start_time, end_time } = req.body;

    const user = await User.findByPk(user_id);

    if(!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    try {
      const store_hours = await StoreHours.create({
        user_id, start_time, end_time
      });
      return res.json(store_hours);
    } catch(err) {
      console.log('store_hours :', err);
    }
  }
};
