
// with promise variable
router.get('/', (req, res, next) => {
  const promise = Place.find({ type: 'restaurant' });
  promise.then((result) => {
    res.json(result);
  });
  promise.catch((error) => {
    next(error);
  });
});


// with chaining (no promie var)
router.get('/', (req, res, next) => {
  Place.find({ type: 'restaurant' })
    .then((result) => {
      res.json(result);
    });
    .catch((error) => {
      next(error);
    });
});
