"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      models.User.associate
    }
  }

  Order.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: { notEmpty: true },
      },
      userId: {
        type: DataTypes.INTEGER,
        field: "user_id",
        allowNull: false,
        unique: true,
        validate: { isNumeric: true, isInt: true, notEmpty: true },
        references: {
          model: "User",
          key: "id",
        },
      },
      quantity: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: { isNumeric: true, notEmpty: true },
      },
      isSent: {
        type: DataTypes.BOOLEAN,
        field: "is_sent",
        allowNull: false,
        defaultValue: false,
      },
      shipmentDate: {
        type: DataTypes.DATE,
        field: "shipment_date",
        allowNull: false,
        validate: { isDate: true, notEmpty: true },
      },
    },

    {
      sequelize,
      modelName: "Order",
      tableName: "orders",
    }
  );
  return Order;
};
