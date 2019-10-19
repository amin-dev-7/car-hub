const express = require('express');
const router = express.Router();

let Car = require('../models/Car');

router.route('/').get((req, res) => {
  Car.find()
    .then(Car => res.json(Car))
    .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/add').post((req, res) => {
  const adTitle = req.body.adTitle;
  const adDescription = req.body.adDescription;
  const carCategory = req.body.carCategory;
  const carBrand = req.body.carBrand;
  const carModel = req.body.carModel;
  const carFuel = req.body.carFuel;
  const gearbox = req.body.gearbox;
  const price = req.body.price;
  const location = req.body.seller;
  const dateAdded = req.body.dateAdded;

});

module.exports = router;

