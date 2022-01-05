const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(connection) {
    super.init({
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      id_store: DataTypes.STRING
    }, {
      sequelize: connection
    })
  }
}

module.exports = User;
