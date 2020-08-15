const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));

const PORT = process.env.PORT || 8080;

app.use(espress.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

var MONGODB_URI = MONGODB_URI || "mongodb://localhost/workout";

mongoose.connect(MONGODB_URI, {
  useNewURLParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

app.listen(PORT, function () {
  console.log("App listening on port: " + PORT);
});
