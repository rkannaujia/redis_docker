const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true, // Automatically removes leading/trailing spaces
  },
  desc: {
    type: String,
    trim: true, // Automatically removes leading/trailing spaces
  },
}, { timestamps: true }); // Adds createdAt and updatedAt fields

module.exports = mongoose.model("Todo", todoSchema);
