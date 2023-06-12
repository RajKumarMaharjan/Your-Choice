const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  password: {type: String, required: true},
  role: {type: String, default: 'user'},
  email:  {type: String, default:''},
  phoneNumber: {type: Number, default:''},
  userName:  {type: String, default:''},
});
module.exports = mongoose.model("User", UserSchema);
