
const addNewUsers =  async(req, res) => {
    const data = await users.create(req.body)
  }


  module.exports=addNewUsers