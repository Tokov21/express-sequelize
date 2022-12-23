const { getAllOrders } = require("../controllers/order.controller");
const ordersRouter = require("express").Router();

ordersRouter.get("/", getAllOrders);
ordersRouter.post("/", getAllOrders);
ordersRouter.patch("/", getAllOrders);
ordersRouter.delete("/", getAllOrders);

module.exports = ordersRouter;
