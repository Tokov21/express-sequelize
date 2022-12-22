const router = require("express").Router();
const userRouter = require("./users.router");

router.get("/", (req, res) => {
  res.send("router");
});

router.use("/users", userRouter);

module.exports = router;
