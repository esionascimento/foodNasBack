const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(connection) {
    super.init({
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,
      birth_date: DataTypes.STRING,
      cnpj: DataTypes.STRING,
      id_store: DataTypes.STRING,
      password: DataTypes.STRING
    }, {
      sequelize: connection
    })
  }

  static associate(models) {
    this.hasMany(models.StoreHours, { foreignKey: 'user_id', as: 'storehours' })
    this.hasMany(models.Address, { foreignKey: 'user_id', as: 'addresses' })
  }
}

module.exports = User;
