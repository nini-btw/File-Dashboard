const mongoose = require("mongoose");
const userRole = require("../utils/userRole");

const userSchema = new mongoose.Schema(
  {
    fileName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
    },
    type: {
      type: String,
      required: [true, "Type is required"],
      unique: true,
      lowercase: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      immutable: true,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

// Export the model
module.exports = mongoose.model("User", userSchema);
