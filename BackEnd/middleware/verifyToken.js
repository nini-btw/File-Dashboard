const jwt = require("jsonwebtoken");
const appError = require("../utils/AppError");
const httpStatusText = require("../utils/httpStatusText");
const verifyToken = (req, res, next) => {
  const header = req.headers["Authorization"] || req.headers["authorization"];
  if (!header) {
    const err = new appError("Token Required", 404, httpStatusText.E);
    return next(err);
  }

  token = header.split(" ")[1];
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_KEY);
    req.currentUser = decodedToken;
    next();
  } catch (err) {
    const error = new appError("Invalid Token", 404, httpStatusText.F);
    return next(error);
  }
};

module.exports = verifyToken;
