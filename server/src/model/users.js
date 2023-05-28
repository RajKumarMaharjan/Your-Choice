const mongoose = require('mongoose');
const usersSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  password:{type: String, required: true},
  email: String,
  phoneNumber: Number,
  userName: String
});

module.exports = mongoose.model("users", usersSchema);