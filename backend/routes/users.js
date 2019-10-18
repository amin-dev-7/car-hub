const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');
const Car = require('../models/Car');

// ADD USER
router.route('/register').post(async (req, res)  => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  let email = req.body.email;
  const mobile = Number(req.body.mobile);
  let password = bcrypt.hashSync(req.body.password, 10);

  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({
      msg: 'Please enter all fields'
    });
  }

  const newUser = new User({
  firstName, lastName, email, mobile, password
  });

  try {
    const userExiset = await User.findOne({ email })
    if (userExiset) {
      res.status(400).json({
        msg: 'User already existss'
        });
    }
    await newUser.save();
    res.status(200).json('User added!');
  }
  catch {
    res.status(404).json('not added');
  }
});

// GET USER BY ID
router.route('/:userId').get(async (req, res) => {
  try {
    const userId = req.params.userId;
    const getUserById = await User.findById(userId);
    res.status(200).json(getUserById);
  } catch {
    res.status(404).json('no id')
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
