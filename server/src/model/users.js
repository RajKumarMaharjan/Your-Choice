const mongoose = require('mongoose');
const usersSchema = new mongoose.Schema({
    name: String, 
    password: String,
  });
  
  
  const users = mongoose.model('Users', usersSchema);
 
  exports.default = users;