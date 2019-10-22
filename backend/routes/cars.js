const express = require('express');
const router = express.Router();

const carController = require('../controllers/cars');

router.route('/')
  .get(carController.getAllCars)

router.route('/:carId')
  .get(carController.getCarById)
  .put(carController.updateCarByUserID)
  .delete(carController.deleteCarByUserID);

module.exports = router;

