const Items = require('../model/item')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const addNewItems = async(req, res) => {
        try{
            const data = new Items(req.body)
            console.log(data)
           
        }catch(err){
            console.log(err)
        }
   

   }

 

const getAllUsers = async(req, res) => {
    const data = await Items.find()
    if(data){
       res.json({
        ItemsList: data
       })
    }
 
 }
 
 


module.exports = {
    addNewItems,
    getAllUsers
}