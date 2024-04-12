const express = require('express')
const mongoose = require('mongoose');
const app = express()


app.listen(3001, () => {
    console.log("Server is running on port 3001")
})


app.get('/',  (req, res) => {
    res.send('Hello From Node API server****')
  });





  mongoose.connect("mongodb+srv://agalidari:Azadehgalidari1992@backenddb.hmqycvv.mongodb.net/Node- API?retryWrites=true&w=majority")
  .then(() => {
    console.log("Connected to dataBase!")
  })
  .catch(() => {
    console.log("Connection faileed!")
  })