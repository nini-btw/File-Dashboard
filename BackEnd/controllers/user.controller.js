const bcrypt = require("bcryptjs");
const User = require("../model/userModel");
const asyncWrapper = require("../middleware/asyncWrapper");
const httpStatusText = require("../utils/httpStatusText");
const jwtGenerator = require("../utils/jwtGenerator");
const AppError = require("../utils/AppError");

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
    const error = AppError.create("test", 401, httpStatusText.F); // Create a new AppError instance
    return next(error);
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
    const error = AppError.create(
      "email and password required",
      404,
      httpStatusText.F
    ); // Create a new AppError instance
    return next(error);
  }

  const user = await User.findOne({ email: email });

  if (!user) {
    const error = AppError.create("user not found", 401, httpStatusText.F); // Create a new AppError instance
    return next(error);
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
    const error = AppError.create("Error Happened", 404, httpStatusText.F); // Create a new AppError instance
    return next(error);
  }
});
module.exports = {
  getAllUsers,
  login,
  register,
};
