const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
  async Authorization(req, res) {
    const { authorization } = req.headers;

    if(!authorization) {
      return res.status(401).send({ auth: false, message: 'Token não informado.' }); 
    }

    const secret = process.env.SECRET;
    jwt.verify(authorization, secret, function(err, _decoded) { 
      if (err) {
        return res.status(500).send({ auth: false, message: 'Token inválido.' });
      }

      return res.status(200).send({ auth: true, message: 'Token valido.' });
    }); 
  }
};
