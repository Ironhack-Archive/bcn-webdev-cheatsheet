// npm install mongoose

const mongoose = require('mongoose');

// --

mongoose.connect('mongodb://localhost/database-name', {
  keepAlive: true,
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE
});

// OR when using provess.env to get ready for deploy

mongoose.connect(process.env.MONGODB_URI, {
  keepAlive: true,
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE
});
