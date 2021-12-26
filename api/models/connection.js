const { MongoClient } = require('mongodb');
const { errorConnect } = require('../middlewares/constructError');
require('dotenv').config();

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const MONGO_DB_URL = process.env.MONGO_DB_URL;

const DB_NAME = process.env.DB_NAME;

let db = null;
function connection() {
  return db
    ? Promise.resolve(db)
    : MongoClient.connect(MONGO_DB_URL, OPTIONS)
      .then((conn) => {
        db = conn.db(DB_NAME);
        return db;
      }).catch(() => {
        return errorConnect('Error: connect falid');
      });
}

module.exports = connection;