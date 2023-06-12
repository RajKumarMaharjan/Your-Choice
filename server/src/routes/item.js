const express=require('express')
const router=express.Router()
const multer  = require('multer')

const {addNewItems, getAllItems} = require('../controller/item')

router.post('/items', addNewItems)




  module.exports = router;
