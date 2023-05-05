const express = require('express')
const app = express()
const port = 8000
app.use(express.json());
const mongoose = require('mongoose');
const { Schema } = mongoose;


const connectToDb = async() => {
  try{
   const res = await mongoose.connect('mongodb://127.0.0.1:27017/Your-choise');   
  
   if(res){
    console.log("conneted to mongoDb")
   }
  }catch(err){
    console.log(err)
  }
}

connectToDb()



const usersSchema = new mongoose.Schema({
  name: String,   // String is shorthand for {type: String}
  password: String,
});

const Users = mongoose.model('Users', usersSchema);

console.log("connected to database")


//read
app.get('/users', async(req, res) => {
  const data = await Users.find()
  res.json({usersList: data})
})

//create
app.post('/register', async(req, res) => {
  const data = await Users.create(req.body)
})

//update
app.put('/change-password/:id',async (req, res) => {
 const data = await Users.findByIdAndUpdate(req.params.id, req.body)
})

app.delete('/users/:id',async (req, res) => {
  const data = await Users.findByIdAndDelete(req.params.id)
 })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})