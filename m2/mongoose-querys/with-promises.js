const Place = require(../models/place);

// with promise variable
router.get('/', (req, res, next) => {
  const promise = Place.find({ type: 'restaurant' });
  promise.then((result) => {
    const data = {
      places: result;
    }
    res.render('place', data);
  });
  promise.catch((error) => {
    next(error);
  });
});

router.post('/place', (req, res, next) => {
  const newPlace = {
    name: req.body.name,
  }
  const promise = Place.insertOne(newPlace);
  promise.then(() => {
    res.redirect('/');
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
      res.render('place', data);
    });
    .catch((error) => {
      next(error);
    });
});

router.post('/place', (req, res, next) => {
  const newPlace = {
    name: req.body.name,
  }
  Place.insertOne(newPlace)
    .then(() => {
      res.redirect('/');
    })
    .catch((error) => {
    next(error);
  });
});
