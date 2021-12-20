const connect = require('./connection');

const create = async (name, email, password, idStore) => {
  const connection = await connect();
  if(connection.isError) {
    return connection;
  }
  const newUser = await connection.collection('users').insertOne({name, email, password, idStore});
  return newUser;
}

const getAll = async () => {
  const auxConnect = await connect();
  const result = await auxConnect.collection('users').find().toArray();
  return result;
}

module.exports ={
  create,
  getAll,
}