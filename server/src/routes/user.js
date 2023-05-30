const express=require('express')
const user =require('../model/user')
const {addNewUser,verifyUser} = require('../controller/user')
const router=express.Router()


router.post('/register', addNewUser)
router.post('/login', verifyUser)

 


   module.exports=router;