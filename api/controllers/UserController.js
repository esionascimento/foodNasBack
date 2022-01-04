const User = require('../models/User');

module.exports = {
  async store(req, res) {
    const { username, email, password, id_store } = req.body;

    const user = await User.create({ username, email, password, id_store });

    return res.json(user);
  }
};
