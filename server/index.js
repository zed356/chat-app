const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const { mongoAPIKey } = require("./config/keys");

const app = express();

const PORT = process.env.PORT || 8080;

// parse application/json
app.use(bodyParser.json());

app.use("/", (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  next();
});

app.get("/api", (req, res, next) => {
  res.json(JSON.stringify("Hellooo"));
});

mongoose
  .connect(mongoAPIKey || "N/A")
  .then((res) => {
    app.listen(PORT);
  })
  .catch((err) => console.log(err)); // todo: implement err handling
