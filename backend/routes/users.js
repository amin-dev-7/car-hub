const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const User = require('../models/User');

router.route('/').get((req, res) => {
  User.find()
    .then(User => res.json(User))
    .catch(err => res.status(400).json('Error: ' + err))
});

router.post('/register', (req, res) => {
  const {
    user_name,
    user_email,
    user_mobile,
    password
  } = req.body;

  // if (!user_name || !user_email || !password) {
  //   return res.status(400).json({
  //     msg: 'Please enter all fields'
  //   });
  // }

  // email = email.toLowerCase();
  // email = email.trim();

  // CHECK IF USER EXIST
  User.findOne({ user_email })
    .then(user => {
      if (user) return res.status(400).json({
        msg: 'User already exists'
      });
      // NEW USER
      const newUser = new User({
        user_name,
        user_email,
        user_mobile,
        password
      });
  });
});

module.exports = router;
