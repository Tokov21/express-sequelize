const express = require("express");
const router = require("./routes");

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("main app");
});

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
