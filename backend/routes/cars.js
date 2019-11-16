const express = require('express');
const router = express.Router();
const carController = require('../controllers/cars');

router.route('/')
  .get(carController.getAllCars)

router.route('/:carId')
  .get(carController.getCarById)
  .put(carController.updateCarByCarId)
  .delete(carController.deleteCarByCarId);

module.exports = router;

