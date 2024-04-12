const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
  {
    name: {
      require: [true, 'Please enter the name'],
      type: String,
    },
    quantity: {
      require: true,
      type: Number,
      default: 0,
    },
    price: {
      require: true,
      type: Number,
      default: 0,
    },
    image: {
      type: String,
      require: false,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
