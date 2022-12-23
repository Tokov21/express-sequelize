const router = require("express").Router();
const ordersRouter = require("./orders.router");
const usersRouter = require("./users.router");

router.get("/", (req, res) => {
  res.send("router");
});

router.use("/users", usersRouter);
router.use("/orders", ordersRouter);

module.exports = router;
