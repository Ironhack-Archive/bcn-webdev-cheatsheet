router.get('/', (req, res, next) => {
  Place.find({ type: 'restaurant' }, (error, result) => {
    if (error) {
      next(error);
    }
    else {
      res.json(result);
    }
  });
});
