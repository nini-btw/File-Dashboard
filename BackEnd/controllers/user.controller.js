const bcrypt = require("bcryptjs");
const User = require("../model/userModel");
const asyncWrapper = require("../middleware/asyncWrapper");
const httpStatusText = require("../utils/httpStatusText");
const appError = require("../utils/AppError");
const jwtGenerator = require("../utils/jwtGenerator");

const getAllUsers = asyncWrapper(async (req, res, next) => {
  const users = await User.find(
    {},
    {
      _id: false,
      isActive: false,
      profilePicture: false,
      createdAt: false,
      isActive: false,
      password: false,
      __v: false,
    }
  );
  res.json({
    status: httpStatusText.S,
    data: {
      users,
    },
  });
});

const register = asyncWrapper(async (req, res, next) => {
  const { fullName, email, password, role } = req.body;
  const oldUser = await User.findOne({ email: email });

  if (oldUser) {
    const err = new appError("Something Happened", 404, httpStatusText.F); // Create a new AppError instance
    return next(err);
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    fullName,
    email,
    password: hashedPassword,
  });

  const token = await jwtGenerator({
    email: newUser.email,
    id: newUser._id,
  });
  newUser.token = token;

  await newUser.save();

  res.json({
    status: httpStatusText.S,
    data: newUser,
  });
});

const login = asyncWrapper(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email && !password) {
    const err = new appError("Something Happened", 404, httpStatusText.F); // Create a new AppError instance
    return next(err);
  }

  const user = await User.findOne({ email: email });

  if (!user) {
    const err = new appError("Something Happened", 404, httpStatusText.F); // Create a new AppError instance
    return next(err);
  }

  const matchedPassword = await bcrypt.compare(password, user.password);

  if (user && matchedPassword) {
    const token = await jwtGenerator({
      email: user.email,
      id: user._id,
      role: user.role,
    });
    return res.json({
      status: httpStatusText.S,
      data: {
        token,
      },
    });
  } else {
    const err = new appError("Something Happened", 404, httpStatusText.F); // Create a new AppError instance
    return next(err); // Pass the error to the error-handling middleware
  }
});
module.exports = {
  getAllUsers,
  login,
  register,
};
