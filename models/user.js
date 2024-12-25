const mongoose = require("mongoose");

// Define the schema for a User
const userSchema = new mongoose.Schema({
  fullname: {
    type: String, // The full name of the user
    required: true, // Full name is mandatory
    trim: true, // Removes leading and trailing spaces from the value
  },
  email: {
    type: String, // The email address of the user
    required: true, // Email is mandatory
    unique: true, // Ensures no two users have the same email
    lowercase: true, // Converts the email to lowercase before saving
    trim: true, // Removes leading and trailing spaces from the value
  },
  password: {
    type: String, // The hashed password for the user
    required: true, // Password is mandatory
    minlength: 8, // Ensures the password has a minimum length of 8 characters
  },
}, { 
  timestamps: true, // Automatically adds `createdAt` and `updatedAt` fields
});

// Export the User model
module.exports = mongoose.model("User", userSchema);
