const express=require('express')
const addNewUsers = require('../controller/users')
const router=express.Router()


router.post('/register', addNewUsers)
 

router.get('/users', async(req, res) => {
    const data = await users.find()
    res.json({usersList: data})
  })

  router.put('/change-password/:id',async (req, res) => {
    const data = await Users.findByIdAndUpdate(req.params.id, req.body)
   })

  router.delete('/users/:id',async (req, res) => {
    const data = await users.findByIdAndDelete(req.params.id)
   })

   module.exports=router;