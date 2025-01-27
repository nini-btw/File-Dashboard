const asyncWrapper = require("../middleware/asyncWrapper");
const User = require("../model/userModel");

const getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

module.exports = {
  getAllUsers,
};
