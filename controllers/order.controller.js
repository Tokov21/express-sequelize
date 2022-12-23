const { Order } = require("../models");

module.exports.getAllOrders = async (req, res, next) => {
  try {
    const orders = Order.findAll();

    res.send({ data: orders });
  } catch (error) {
    next(error);
  }
};
