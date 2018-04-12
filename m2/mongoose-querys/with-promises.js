const Place = require(../models/place);

// with promise variable
router.get('/', (req, res, next) => {
  const promise = Place.find({ type: 'restaurant' });
  promise.then((result) => {
    const data = {
      places: result;
    }
    res.json(data);
  });
  promise.catch((error) => {
    next(error);
  });
});


// with chaining (no promise var)
router.get('/', (req, res, next) => {
  Place.find({ type: 'restaurant' })
    .then((result) => {
      const data = {
        places: result;
      }
      res.json(data);
    });
    .catch((error) => {
      next(error);
    });
});
