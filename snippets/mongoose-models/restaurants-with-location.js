const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const RestaurantSchema = new Schema({
  name: String,
  description: String,
  location: {
    type: {
      type: String
    },
    coordinates: [Number]
  }
});

RestaurantSchema.index({ location: '2dsphere' });

const Restaurant = mongoose.model("Restaurant", userSchema);

module.exports = Restaurant;
