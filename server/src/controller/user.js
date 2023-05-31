const user = require('../model/user')
const bcrypt = require('bcrypt')

const addNewUser =  async(req, res) => {
  try{
    const userExists = await user.find({$or:[{email:req.body.email || ''},{userName: req.body.userName || ''},{phoneNumber:req.body.phoneNumber || ''}]})
   if (userExists.length == 0){
    const hash = bcrypt.hashSync(req.body.password, 8);
    req.body.password = hash
    const data = await user.create(req.body)
    if(data){
      res.json({
        msg:"registered successfully"
      })
    }else{
      res.sendStatus(409)
    }
   }

  }catch(err){
    console.log(err)
  }
  }
  const verifyUser = async(req, res) => {
    console.log("req.body")
  }

const getAllUsers =async(req, res) => {
  const data = await user.find()
  if(data){
    res.json({
      userList: data
    })
  }
}


  module.exports = {
    addNewUser,
    verifyUser,
    getAllUsers
  }