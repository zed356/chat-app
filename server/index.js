const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

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
  .connect(
    "mongodb+srv://tiap:maumau@cluster0.kap9i.mongodb.net/chat-app?authSource=admin&replicaSet=atlas-7exh5g-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true"
  )
  .then((res) => {
    app.listen(PORT);
  })
  .catch((err) => console.log(err)); // todo: implement err handling
