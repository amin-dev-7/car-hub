const bcrypt = require('bcrypt');
const User = require('../../models/User');

module.exports = {
  // SIGN UP
  register: async (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    let email = req.body.email;
    const mobile = Number(req.body.mobile);
    let password = bcrypt.hashSync(req.body.password, 10);

    // VALIDATION
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({
        msg: 'Please enter all fields'
      });
    }

    try {
      const newUser = new User({
        firstName,
        lastName,
        email,
        mobile,
        password
      });

      // CHECK IF USER ALREADY EXIST
      const userExiset = await User.findOne({
        email
      });
      if (userExiset) {
        res.status(400).json({
          msg: 'User already existss'
        });
      } else {
        // CREATE A NEW USER
        await newUser.save();
        res.status(200).json('User added!');
      }
    } catch {
      res.status(400).json('user not added');
    }
  }
};
