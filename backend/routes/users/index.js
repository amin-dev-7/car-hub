const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../../models/User');
const Car = require('../../models/Car');

// GET USER BY ID
router.route('/:userId').get(async (req, res) => {
  try {
    const userId = req.params.userId;
    const getUserById = await User.findById(userId);
    res.status(200).json(getUserById);
  } catch {
    res.status(404).json('wrong id')
  }
});

// UPDATE USER BY ID
router.route('/update/:userId').post((req, res) => {
  User.findById(req.params.userId)
    .then(user => {
      user.firstName = req.body.firstName;
      user.lastName = req.body.lastName;
      user.email = req.body.email;
      user.mobile = Number(req.body.mobile);
      user.password = bcrypt.hashSync(req.body.password, 10);

      user.save()
        .then(() => res.json('User updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

// ADD CAR TO USER BY USER ID
router.route('/:userId/cars').post(async (req, res) => {
  const userId = req.params.userId;
  const newCar = new Car(req.body);
  try {
    const user = await User.findById(userId);
    newCar.seller = user;
    await newCar.save();
    user.cars.push(newCar);
    await user.save();
    res.status(200).json('car added');
  } catch {
      res.status(400).send('not posted')
  }
});

router.route('/:userId/cars').get(async (req, res) => {
    try {
      const userId = req.params.userId;
      const user = await User.findById(userId).populate('cars');
      res.status(200).json(user);
    } catch {
      res.status(400).send('wrong id')
    }
});

module.exports = router;






  // CHECK IF USER EXIST
  // User.findOne({ email })
  // .then(user => {
  //   if(user) return res.status(400).json({
  //     msg: 'User already exists'
  //    });

  // NEW USER
  // User.findOne({ email })
  // .then(user => {
  //   if(user) return res.status(400).json({
  //     msg: 'User already exists'
  //    });
  // const userExiset = User.findOne({ email })
  // if (userExiset) {
  //   res.status(400).json({
  //     msg: 'User already exists'
  //     });
  // }
  // if(user) return res.status(400).json({
  //   msg: 'User already exists'
  //   });
  // newUser.save()
  //   .then(() => res.json('User added!'))
  //   .catch(err => res.status(400).json('Error: ' + err));
  // });
