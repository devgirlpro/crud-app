const express = require('express');
const mongoose = require('mongoose');
const Product = require("./models/product.model.js");

const app = express();

//in post method, not allow to pass json through our node
//that for have to use a moddleware
app.use(express.json())


app.get('/', (req, res) => {
    res.send('Hello From Node API server****');
  });
  

//post to save product in our database
app.post('/api/products', async (req, res) => {
    try{
       const product =  await Product.create(req.body);
       res.status(200).json(product)
    } catch(error) {
        res.status(500).json({message: error.message})
    }
})


mongoose
  .connect(
    'mongodb+srv://agalidari:Azadehgalidari1992@backenddb.hmqycvv.mongodb.net/Node-API?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log('Connected to dataBase!');
    app.listen(3001, () => {
        console.log('Server is running on port 3001');
      });
  })
  .catch(() => {
    console.log('Connection faileed!');
  });




