const express = require('express');
const router = express.Router();
const userController = require('../controllers/users/users');
const registerController = require('../controllers/users/register');
const authenticationController = require('../controllers/users/authentication');
const auth = require('../middleware/authentication');
const multer = require('multer');
const path = require("path");

router.route('/')
  .get(userController.getAllUsersAndCars);

router.route('/register')
  .post(registerController.register);

router.route('/auth')
  .post(authenticationController.authentication);

router.route('/:userId')
  .get(userController.getUserById)
  .put(userController.updateUserById);

router.get('/auth/user', auth, userController.getUserAuth);

router.get("/:userId/cars", userController.getCarsByUserId);

/*
  FILE UPLOAD CONFIGURATIONS
*/

const storage = multer.diskStorage({
  destination: "./public/uploads/",
  filename: function(req, file, cb){
     cb(null,"img-" + Date.now() + path.extname(file.originalname));
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

/*
  <-! FILE UPLOADS CONFIGURATIONS !->
*/

router.post("/:userId/cars", upload.single('carImage'), userController.addCar);

module.exports = router;

