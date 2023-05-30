const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  password:{type: String, required: true},
  email: String,
  phoneNumber: Number,
  userName: String
});

module.exports = mongoose.model("user", userSchema);