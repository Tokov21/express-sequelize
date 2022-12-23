"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {}
  }

  const length = 64;

  User.init(
    {
      firstName: {
        type: DataTypes.STRING(length),
        field: "first_name",
        allowNull: false,
        unique: "composite",
        validate: { isAlpha: true, notEmpty: true },
      },
      lastName: {
        type: DataTypes.STRING(length),
        field: "last_name",
        allowNull: false,
        unique: "composite",
        validate: { isAlpha: true, notEmpty: true },
      },
      email: {
        type: DataTypes.STRING(128),
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
          notEmpty: true,
        },
      },
      birthDate: {
        type: DataTypes.DATE,
        field: "birth_date",
        validate: {
          isDate: true,
          isBefore: DataTypes.NOW,
        },
      },
    },

    {
      sequelize,
      modelName: "User",
      tableName: "users",
    }
  );
  return User;
};
