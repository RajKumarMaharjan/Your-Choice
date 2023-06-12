const express=require('express')
const user =require('../model/user')
const {addNewUser,verifyUser,getAllUsers} = require('../controller/user')
const router=express.Router()


router.post('/register', addNewUser)
router.post('/login', verifyUser)
router.get('/user', getAllUsers)



   module.exports=router;