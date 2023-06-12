const express = require('express')
const app = express()
const cors = require('cors')
const port = 8080
require('dotenv').config(`${process.env.SECRET_KEY}`)
const userRoutes = require('./routes/user')
const itemRoutes = require ('./routes/item')
const dbconnect = require('./db/dbconnect')

dbconnect()
app.use(express.json());
app.use(cors());


app.use("/", userRoutes);
app.use("/", itemRoutes);


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})