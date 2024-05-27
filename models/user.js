'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    telegram_id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      unique: true,
    },
    telegram_username: DataTypes.STRING,
    balance: DataTypes.BIGINT,
    referred: DataTypes.BIGINT,
    automate: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};