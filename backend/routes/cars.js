const express = require('express');
const router = express.Router();

const carControllers = require('../controllers/cars');

router.route('/')
  .get(carControllers.getAllCars);

// router.route('/add').post((req, res) => {
//   const adTitle = req.body.adTitle;
//   const adDescription = req.body.adDescription;
//   const carCategory = req.body.carCategory;
//   const carBrand = req.body.carBrand;
//   const carModel = req.body.carModel;
//   const carFuel = req.body.carFuel;
//   const gearbox = req.body.gearbox;
//   const price = req.body.price;
//   const location = req.body.seller;
//   const dateAdded = req.body.dateAdded;

// });

module.exports = router;

