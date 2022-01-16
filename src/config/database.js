require('dotenv').config();

module.exports = {
  dialect: 'postgres',
  host: process.env.POSTGRE_HOST,
  username: process.env.POSTGRE_USERNAME,
  password: process.env.POSTGRE_PASSWORD,
  database: process.env.POSTGRE_DBNAME,
  define: {
    timestamps: true, //create_at, updated_at
    underscored: true //user_scored
  }
};

/* module.exports = {
  dialect: 'postgres',
  host: process.env.DEV_POSTGRE_HOST,
  username: process.env.DEV_POSTGRE_USERNAME,
  password: process.env.DEV_POSTGRE_PASSWORD,
  database: process.env.DEV_POSTGRE_DBNAME,
  define: {
    timestamps: true, //create_at, updated_at
    underscored: true //user_scored
  }
}; */
