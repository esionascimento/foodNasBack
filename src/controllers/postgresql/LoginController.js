const { LoginService } = require('../../services/LoginService');

module.exports = {
  async login(req, res, next) {
    try {
      const resultLogin = await LoginService(req.body);
      
      if (resultLogin.isError) {
        return next(resultLogin);
      }
  
      const { id, name, email, id_store, token } = resultLogin;
      return res.status(200).json({id, name, email, id_store, token});
    } catch (error) {
      console.log('errorLoginController :', error);
    }
  }
};
