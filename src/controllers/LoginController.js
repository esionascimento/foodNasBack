const { LoginService } = require('../services/loginService');

module.exports = {
  async login(req, res) {
    const resultLogin = await LoginService(req.body);

    const { id, name, email, id_store, token } = resultLogin;
    return res.status(200).json({ id, name, email, id_store, token });
  }
};
