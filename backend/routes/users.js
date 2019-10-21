const express = require('express');
const router = express.Router();

const userController = require('../controllers/users/index');
const registerController = require('../controllers/users/register');

router.route('/')
  .get(registerController.getAllUsers)

router.route('/register')
  .post(registerController.register);

router.route('/:userId')
  .get(userController.getUserById)
  .put(userController.updateUserById);

router.route('/:userId/cars')
  .post(userController.addCarToUser)
  .get(userController.getUserCarsByUserId);

module.exports = router;
