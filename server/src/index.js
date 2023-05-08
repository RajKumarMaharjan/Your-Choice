const express = require('express')
const app = express()
const port = 8000
require('dotenv').config()
const dbconnect = require('./bd/dbconnect')
const users =require('./model/users')
const product = require('./model/product')
const usersRoutes = require('./routes/users')
const productRoutes = require('./routes/product')
// 
dbconnect()
app.use(express.json());
app.use('/', usersRoutes);



app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})