app.use((err, req, res, next) => {
  console.log("error", err.message);
  res.status(400).send({ error: err.message });
});
