const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;

app.use("/", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  next();
});

app.get("/api", (req, res, next) => {
  res.json({ message: "Hello" });
});

app.listen(PORT);
