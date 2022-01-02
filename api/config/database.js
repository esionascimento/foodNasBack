require('dotenv').config();

const user = process.env.POSTGRE_USERNAME;
const pass = process.env.POSTGRE_PASSWORD;

module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: user,
  password: pass,
  database: 'foodnas',
  define: {
    timestamps: true, //create_at, updated_at
    underscored: true //user_scored
  }
};
