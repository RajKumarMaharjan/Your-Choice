const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    catagories: String, 
    productsName: String,
    productPrice: Number,
    productStock: Number,
  
  });

  const product = mongoose.model('product', productSchema);

exports.default = product;