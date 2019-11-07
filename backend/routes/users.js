const express = require('express');
const router = express.Router();
const userController = require('../controllers/users/users');
const registerController = require('../controllers/users/register');
const authenticationController = require('../controllers/users/authentication');
const auth = require('../middleware/authentication');
const User = require('../models/User');
const Car = require('../models/Car');
const multer = require('multer');
const path = require("path");

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
  // .post(userController.addCarForSale)
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

const storage = multer.diskStorage({
  destination: "./public/uploads/",
  filename: function(req, file, cb){
     cb(null,"IMAGE-" + Date.now() + path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg"
  ) {
    cb(null, true);
  }
  cb(null, false);
};

const upload = multer({
  storage: storage,
  limits:{fileSize: 1000000},
  fileFilter: fileFilter
});

router.post("/:userId/cars", upload.single('myImage'), async (req, res) => {
  try {
    const userId = req.params.userId;
    console.log(req.body);
    console.log(req.file);
    let carImage = req.file.path;
    const newCar = new Car(req.body);
    const user = await User.findById(userId);
    newCar.seller = user;
    newCar.carImage = carImage;
    await newCar.save();
    user.cars.push(newCar);
    const car = await user.save();
    res.status(200).json(car);
    } catch (err) {
      res.status(404).json(`error: ${err}`)
      console.log(err);
    }
  });

module.exports = router;
