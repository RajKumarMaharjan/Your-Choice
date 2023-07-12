const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const userRoutes = require('./routes/user')
const itemRoutes = require ('./routes/item')
const dbconnect = require('./db/dbconnect')

app.use(express.json());
app.use(cors());
app.use("/", userRoutes);
app.use("/", itemRoutes);
dbconnect()

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});