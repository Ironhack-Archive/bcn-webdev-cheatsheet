// -- middleware after passport init, before routes

app.use((req, res, next) => {
  app.locals.user = req.user;
  next();
});
