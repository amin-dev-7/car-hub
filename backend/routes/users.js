const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

let User = require('../models/User');

router.route('/').get((req, res) => {
  User.find()
    .then(User => res.json(User))
    .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/register').post((req, res) => {
  const name = req.body.name;
  let email = req.body.email;
  const mobile = req.body.mobile;
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

module.exports = router;
