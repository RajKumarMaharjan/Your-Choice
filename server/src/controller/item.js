const Item = require('../model/item')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

// Function to add a new item
const addNewItems = async(req, res) => {
        try{
            req.body['Item Image'] = req.file.filename
           const data = await Item.create(req.body)
           if(data){
            res.json({
                msg: " saved sucessfully"
            })
           }
           
        }catch(err){
            console.log(err)
        }
   

   }

   // Function to get all items
   const getAllItems = async(req, res) => {
    const data = await Item.find()
    if(data){
       res.json({
        ClipboardItemList: data
       })
    }
 
 }
 
 // Function to get an image by ID
 const getImageById= async(req, res) => {
    const data = await Item.findById(req.params.id)
    const imgName = data['Item Image']
    const imgPath = path.join(__dirname, '../../uploads/items', imgName)
    res.sendFile(imgPath)
 }

 // Function to delete an image by ID
 const delImageById= async(req, res) => {
    const itemId = req.params.id
    try{
        await Item.findByIdAndDelete(itemId)
        res.sendStatus(204).json({ message: 'Item deleted successfully.' })
    }catch (error){
        res.sendStatus(500).json({ error: 'An error occurred while deleting the item.' })
    }
 }



module.exports = {
    addNewItems,
    getAllItems,
    getImageById,
    delImageById
}