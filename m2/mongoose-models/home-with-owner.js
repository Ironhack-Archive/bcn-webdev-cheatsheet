'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const homeSchema = new Schema({
  name: String,
  owner: {
    type: ObjectId,
    ref: 'User'
  }
});

const Home = mongoose.model('Home', homeSchema);

module.exports = Home;
