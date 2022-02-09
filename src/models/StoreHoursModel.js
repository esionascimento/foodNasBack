const { Model, DataTypes } = require('sequelize');

class StoreHours extends Model {
  static init(connection) {
    super.init({
      start_time: DataTypes.STRING,
      end_time: DataTypes.STRING,
    }, {
      sequelize: connection
    })
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' })
  }
}

module.exports = StoreHours;
