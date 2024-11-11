// 'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {
      this.belongsTo(models.Roles, {
        foreignKey: 'roleId',
        as: 'role',
      });
    }
  }
  Users.init(
    {
      displayName: DataTypes.STRING,
      email: DataTypes.STRING,
      document: DataTypes.STRING,
      phone: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Users',
      timestamps: false,
    },
  );
  return Users;
};
