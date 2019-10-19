const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../../models/User');

// CREATE A NEW USER // SIGN UP
router.route('/').post(async (req, res) => {

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

  try {
    const newUser = new User({
      firstName, lastName, email, mobile, password
    });
    const userExiset = await User.findOne({
      email
    })
    if (userExiset) {
      res.status(400).json({
        msg: 'User already existss'
      });
    }
    await newUser.save();
    res.status(200).json('User added!');
  } catch {
    res.status(400).json('user not added');
  }
});

module.exports = router;
