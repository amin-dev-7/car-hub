const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

let User = require('../models/User');

router.route('/').get((req, res) => {
  User.find()
    .then(User => res.json(User))
    .catch(err => res.status(400).json('Error: ' + err))
});

// ADD USER
router.route('/register').post((req, res) => {
  const name = req.body.name;
  let email = req.body.email;
  const mobile = Number(req.body.mobile);
  let password = bcrypt.hashSync(req.body.password, 10);

  if (!name || !email || !password) {
    return res.status(400).json({
      msg: 'Please enter all fields'
    });
  }

  email = email.toLowerCase();
  email = email.trim();

  // CHECK IF USER EXIST
  User.findOne({ email })
  .then(user => {
    if(user) return res.status(400).json({
      msg: 'User already exists'
     });

    // NEW USER
    const newUser = new User({
    name,
    email,
    mobile,
    password
  });

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  });
});

// GET USER BY ID
router.route('/:id').get((req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});

// UPDATE USER BY ID
router.route('/update/:id').post((req, res) => {
  User.findById(req.params.id)
    .then(user => {
      user.name = req.body.name;
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
