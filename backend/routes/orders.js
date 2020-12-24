const router = require('express').Router();
const Order = require('../models/order.model');

// get      /
router.route('/').get((req, res) => {
  Order.find()
    .then(orders => res.json(orders))
    .catch(err => res.status(400).json('Error: ' + err))
});

// get      /:id
router.route('/:id').get((req, res) => {
  Order.findById(req.params.id)
    .then(order => res.json(order))
    .catch(err => res.status(400).json('Error: ' + err))
});

// post     /add
router.route('/add').post((req, res) =>{
  const username = req.body.username;
  const description = req.body.description;
  // CHECK IF YOU NEED TO PARSE THE DATA TYPE OF FOOD (ARRAY)
  const foods = req.body.foods;
  const date = Date.parse(req.body.date);
  const newOrder = new Order({
    username, 
    description,
    foods,
    date,
  });
  newOrder.save()
    .then(() => res.json('Order added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// post     /update/:id
router.route('/update/:id').post((req, res) => {
  Order.findById(req.params.id).then(order => {
    order.username = req.body.username;
    order.description = req.body.description;
    order.foods = req.body.foods;
    order.date = Date.parse(req.body.date);
    order.save()
      .then(() => res.json('Order updated!'))
      .catch(err => res.status(400).json('Error: ' + err));
  })
  .catch(err => res.status(400).json('Error: ' + err));
});

// delete   /:id
router.route('/:id').delete((req, res) => {
  Order.findByIdAndDelete(req.params.id)
    .then(() => res.json('Order deleted!'))
    .catch(err => res.status(400).json('Error: ' + err))
});

module.exports = router;