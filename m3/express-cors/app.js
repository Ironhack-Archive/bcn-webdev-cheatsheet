// npm install --save cors

// -- middlewares

app.use(cors({
  credentials: true,
  origin: ['http://localhost:4200']
}));
