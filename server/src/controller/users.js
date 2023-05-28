const users = require('../model/users')
const bcrypt = require('bcrypt')

const addNewUsers =  async(req, res) => {
  try{
    const usersExists = await users.exists ({email:req.body.email})
    if(!usersExists){
      const hash = bcrypt.hashSync(req.body.password, 8);
      req.body.password = hash
      const data = await users.create(req.body)
      if(data){
        res.json({
          msg:"registered successfully"
        })
      }
    }else{
      res.sendStatus(409)
    }
  }catch(err){
    console.log(err)
  }
  }
const deleteUsers = async(req, res) => {
  console.log("test")
}

const getAllPassword = async(req, res)=> {
  const data = await users.find()
  res.json({data:data})
}

  module.exports = {
    addNewUsers,
    deleteUsers,
    getAllPassword
  }