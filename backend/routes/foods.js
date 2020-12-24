const router = require('express').Router();
let Food = require('../models/food.model');

// get      /
router.route('/').get((req, res) => {
  Food.find()
    .then(foods => res.json(foods))
    .catch(err => res.status(400).json('Error: ' + err));
});

// get      /:id
router.route('/:id').get((req, res) => {
  Food.findById(req.params.id)
    .then(food => res.json(food))
    .catch(err => res.status(400).json('Error: ' + err));
});

// post     /add
router.route('/add').post((req, res) => {
  const name = req.body.name;
  const newFood = new Food({ name });
  newFood.save()
    .then(() => res.json('Food added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// post     /update/:id
router.route('/update/:id').post((req, res) => {
  Food.findById(req.params.id).then(food => {
    food.name = req.body.name;
    food.save()
      .then(() => res.json('Food Updated!'))
      .catch(err => res.status(400).json('Error: ' + err))
  })
});

// delete   /:id
router.route('/:id').delete((req, res) => {
  Food.findByIdAndDelete(req.params.id)
    .then(() => res.json('Food deleted!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
