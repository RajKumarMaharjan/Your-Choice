const mongoose = require('mongoose');
const OrderSchema = new mongoose.Schema({
  "firstName": String,
  "lastName": String,
  "Address": String,
  "ContactNumber": Number,
  "ProductCode": Number,
  "ProductDescription": String,

});



module.exports = mongoose.model('Order', OrderSchema);



