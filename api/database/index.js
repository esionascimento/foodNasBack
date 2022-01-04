const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');

const connection = new Sequelize(dbConfig);

User.init(connection);

async function aux() {
  try {
    await connection.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
aux();

module.exports = connection;
