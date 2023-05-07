const express=require('express')
const router=express.Router()

router.get('/product', async(req, res) => {
    const data = await product.find()
    res.json({productList: data})
  })

  router.put('/product/:id',async (req, res) => {
    const data = await product.findByIdAndUpdate(req.params.id, req.body)
   })

   router.post('/product', async(req, res) => {
    const data = await product.create(req.body)
  })
   
  router.delete('/product/:id',async (req, res) => {
    const data = await product.findByIdAndDelete(req.params.id)
   })


   module.exports=router;