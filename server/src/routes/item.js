const express = require('express')
const router = express.Router()
const multer = require('multer')
const { addNewItems, getAllItems, getImageById, delImageById} = require('../controller/item')

const storage = multer.diskStorage({
   destination: function (req, file, cb) {
      cb(null, 'uploads/items/')
   },
   filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname)
   }
})

const upload = multer({ storage: storage })

router.post('/item', upload.single('itemImage'), addNewItems)
router.get('/item', getAllItems)
router.get('/item-image/:id', getImageById)
router.delete('/item-image/:id', delImageById)




module.exports = router;