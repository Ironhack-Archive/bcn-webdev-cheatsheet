// -- middleware after passport init, before routes

app.use((req, res, next) => {
  req.locals.user = req.user;
  next();
});
