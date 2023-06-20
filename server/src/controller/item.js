const Item = require('../model/item')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const addNewItems = async(req, res) => {
        try{
            req.body['Item Image'] = req.file.filename
           const data = await Item.create(req.body)
           if(data){
            res.json({
                msg: "item saved sucessfully"
            })
           }
           
        }catch(err){
            console.log(err)
        }
   

   }

   const getAllItems = async(req, res) => {
    const data = await Item.find()
    if(data){
       res.json({
        ClipboardItemList: data
       })
    }
 
 }
 




module.exports = {
    addNewItems,
    getAllItems
}