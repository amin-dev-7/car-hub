const express = require('express');
const router = express.Router();
const userController = require('../controllers/users/users');
const registerController = require('../controllers/users/register');
const authenticationController = require('../controllers/users/authentication');
const auth = require('../middleware/authentication');
const User = require('../models/User');

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

// @route   GET users/auth/user
// @desc    Get user data
// @access  Private
router.get('/auth/user', auth, (req, res) => {
  User.findById(req.user.id)
    .select('-password')
    .then(user => res.json(user));
});

module.exports = router;
