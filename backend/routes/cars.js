const express = require('express');
const router = express.Router();

const carController = require('../controllers/cars');
const userController = require('../controllers/users/index');

router.route('/')
  .get(carController.getAllCars)
  .post(carController.addCartoSeller);

router.route('/:carId')
  .get(carController.getCarById)
  .put(carController.updateCarByUserID)
  .delete(carController.deleteCarByUserID);

// router.route('/:userId/cars')
//   .post(userController.addCarSeller);

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

