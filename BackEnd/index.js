require("dotenv").config();
const express = require("express");
const cors = require("cors");
const httpStatusText = require("./utils/httpStatusText");

// Creating the server
const app = express();

//applying middlewares
app.use(express.json());
app.use(cors());

// Connecting to the database
require("dotenv").config();
const mongoose = require("mongoose");
const url = process.env.DB_URL;
const port = process.env.PORT;

mongoose.connect(url).then(() => {
  console.log("MongoDb connect Success");
});

// Routes
const userRouter = require("./routes/userRoute");
app.use("/api/users", userRouter);

// Starting the server
app.listen(port, () => {
  console.log(`Listening on PORT ${port}`);
});
