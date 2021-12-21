const connection = require('./connection');

const login = async (email) => {
  const connect = await connection();
  if(connect.isError) {
    return connection;
  };
  const resultLogin = await connect.collection('users').findOne({email});
  return resultLogin;
};

module.exports = { login };
