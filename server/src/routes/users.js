const express=require('express')
const users =require('../model/users')
const {addNewUsers,getAllPassword} = require('../controller/users')
const router=express.Router()


router.post('/register', addNewUsers)
router.post('/password', getAllPassword)
 


   module.exports=router;