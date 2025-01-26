require("dotenv").config();
const express = require("express");
const cors = require("cors");

//creating the server
const app = express();

//Connecting to The DataBase
const mongoose = require("mongoose");
const url = process.env.DB_URL;
const port = process.env.PORT;

mongoose
  .connect(url)
  .then(() => console.log("MongoDB connected successfully"))
  .catch(() => console.error("MongoDB connection error"));

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log("listening on PORT 5000");
});
