class AppError extends Error {
  constructor(message, statusCode, statusText) {
    super(message); // Initialize the Error class with the message
    this.statusCode = statusCode; // Set the status code
    this.statusText = statusText; // Set the status text

    // Capture the stack trace (optional but useful for debugging)
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
