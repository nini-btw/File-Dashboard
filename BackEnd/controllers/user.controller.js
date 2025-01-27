const httpStatusText = require("../utils/httpStatusText");
const User = require("../models/user.model");
const asyncWrapper = require("../middleware/asyncWrapper");

const getAllUsers = asyncWrapper(async (req, res, next) => {
  const users = await User.find({});
  res.json({
    status: httpStatusText.S,
    data: {
      u: users,
    },
  });
});

module.exports = {
  getAllUsers,
};
