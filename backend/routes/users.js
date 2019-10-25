const express = require('express');
const router = express.Router();

const userController = require('../controllers/users/users');
const registerController = require('../controllers/users/register');
const authenticationController = require('../controllers/users/authentication');

router.route('/')
  .get(registerController.getAllUsersAndCars);

router.route('/register')
  .post(registerController.register);

router.route('/auth')
  .post(authenticationController.authentication);

router.route('/:userId')
  .get(userController.getUserById)
  .put(userController.updateUserById);

router.route('/:userId/cars')
  .post(userController.addCarForSale)
  .get(userController.getSellerCars);
  // ADD DeleteByUserId AND UpdateByUserId METHODS??

module.exports = router;
