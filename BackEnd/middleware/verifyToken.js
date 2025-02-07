const jwt = require("jsonwebtoken");
const httpStatusText = require("../utils/httpStatusText");
const AppError = require("../utils/AppError");

const verifyToken = (req, res, next) => {
  const header = req.headers["Authorization"] || req.headers["authorization"];

  if (!header) {
    const error = AppError.create("Token Required", 404, httpStatusText.F);
    return next(error);
  }

  const token = header.split(" ")[1]; // Properly declare the token variable

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_KEY);

    req.currentUser = decodedToken;

    const userRole = decodedToken.role;

    next();
  } catch (err) {
    const error = AppError.create("Invalid Token", 404, httpStatusText.F);
    return next(error); // Proceed to error handling middleware
  }
};

module.exports = verifyToken;
