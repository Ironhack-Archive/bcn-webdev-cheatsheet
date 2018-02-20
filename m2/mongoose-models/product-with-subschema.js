const mongoose = require('mongoose');
const Review   = require('./review');
const Schema   = mongoose.Schema;

const productSchema = new Schema({
  name       : String,
  price      : Number,
  imageUrl   : String,
  description: String,
  reviews    : [Review.schema]
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
