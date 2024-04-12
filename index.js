const express = require('express');
const mongoose = require('mongoose');

const productRoute = require("./routes/product.route.js");
const app = express();


//middlware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoute);

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
