require("dotenv").config();
const express = require("express");
const cors = require("cors");

// Creating the server
const app = express();

// Connecting to the database
require("dotenv").config();
const mongoose = require("mongoose");
const url = process.env.DB_URL;
const port = process.env.PORT;

mongoose
  .connect(url)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const userRouter = require("./routes/user.route");
app.use("/api/users", userRouter);

// Starting the server
app.listen(port, () => {
  console.log(`Listening on PORT ${port}`);
});
