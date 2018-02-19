// -- middleware after passport init, before routes

app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});
