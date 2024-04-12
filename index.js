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
  

//get all products => Product.find({})
app.get("/api/products", async (req, res) => {
    try {
        const prodacts = await Product.find({})
        res.status(200).json(prodacts)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})


//get one products => Product.findById(id)
app.get("/api/product/:id", async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findById(id)

        if(!product) {
            return res.status(404).json({message: "Product not found"})
        }  

        res.status(200).json(product)

    } catch(error) {
        res.status(500).json({message: error.message})
    }
})

//update product => app.put => Product.findByIdAndUpdate(id, req.body)
app.put("/api/product/:id", async(req, res) => {
    try {
        const  { id } = req.params;
        const product = await Product.findById(id)

        if(!product) {
            return res.status(404).json({message: "Product not found"})
        }

        const updatedProduct = await Product.findByIdAndUpdate(id, req.body);
        res.status(200).json(updatedProduct)

    } catch(error) {
        res.status(500).json({message: error.message})
    }
})




//delete a product
app.delete("/api/product/:id", async (req, res) => {
    try {
        const  { id } = req.params;
        const product = await Product.findById(id)

        if(!product) {
            return res.status(404).json({message: "Product not found"})
        }

        const deletedProduct = await Product.findByIdAndDelete(id);
        res.status(200).json({message: "product delted successfully"})

    } catch(error) {
        res.status(500).json({message: error.message})
    }
})



//post to save product in our database => Product.create(req.body)
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




