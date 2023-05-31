const mongoose = require('mongoose');
const dbconnect = async() => {
    try{
     const res = await mongoose.connect('mongodb://127.0.0.1:27017/Your-choise');   
    
     if(res){
      console.log("conneted to mongoDb")
     }
    }catch(err){
      console.log(err)
    }
  }
  
  module.exports = dbconnect;