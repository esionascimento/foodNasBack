const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/UserModel');
const Address = require('../models/AddressModel');
const StoreHours = require('../models/StoreHoursModel');

const connection = new Sequelize(dbConfig);

User.init(connection);
Address.init(connection);
StoreHours.init(connection);

User.associate(connection.models);
Address.associate(connection.models);
StoreHours.associate(connection.models);

async function verifyConnection() {
  try {
    await connection.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
verifyConnection();

module.exports = connection;
