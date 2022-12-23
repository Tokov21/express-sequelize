const usersRouter = require("express").Router();

usersRouter.get("/", (req, res) => {
  console.log("users");
  res.send("users");
});

module.exports = usersRouter;
