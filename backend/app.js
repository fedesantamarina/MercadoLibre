const express = require("express");
const path = require("path");
const cors = require("cors");
const indexRouter = require("./routes/index");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const app = express();
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(morgan("dev"));
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/items", indexRouter);

module.exports = app;
