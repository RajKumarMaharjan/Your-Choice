const Item = require('../model/item')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const path = require('path');

// Function to add a new item
const addNewItems = async(req, res) => {
        try{
            req.body['Item Image'] = req.file.filename
           const data = await Item.create(req.body)
           if(data){
            return res.json({
                msg: " saved sucessfully"
            })
           }
           
        }catch(err){
            res.status(500).json({ error: 'An error occurred while saving the item.' });
        }
   

   }

   // Function to get all items
   const getAllItems = async (req, res) => {
    const itemCount = await Item.find().count()
    const pageCount = Math.ceil(itemCount/3)
    const skipRange = (req.query.page -1) * 3
    const data = await Item.find({}).skip(skipRange).limit(3);
    try {
      if (data.length > 0) {
        res.json({
          ClipboardItemList: data,
          pageCount: pageCount
        });
      }else{
        res.json({
          ClipboardItemList: [],
        });
      }
    } catch (err) {
      res.status(500).json({ error: 'An error occurred while retrieving items.' });
    }
   
  };
  
 
 
 // Function to get an image by ID
 const getImageById = async (req, res) => {
    try {
      const data = await Item.findById(req.params.id);
      if (data && data['Item Image']) {
        const imgName = data['Item Image'];
        const imgPath = path.join(__dirname, '../../uploads/items', imgName);
        res.sendFile(imgPath);
      } else {
        res.status(404).json({ message: 'Image not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  

 // Function to delete an image by ID
 const delImageById= async(req, res) => {
    const itemId = req.params.id
    try{
      const deletedItem = await Item.findByIdAndDelete(itemId)
      if(deletedItem){
        res.sendStatus(204).json({ message: 'Item deleted successfully.' })
      }else{
        res.sendStatus(404).json({ error: 'Item not found'})
      }
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