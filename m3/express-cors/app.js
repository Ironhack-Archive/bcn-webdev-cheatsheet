// npm install --save cors

const cors = require('cors');

// -- middlewares

app.use(cors({
  credentials: true,
  origin: ['http://localhost:4200']
}));
