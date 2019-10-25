const bcrypt = require('bcrypt');
const User = require('../../models/User');
const jwt = require('jsonwebtoken')

module.exports = {
  authentication: async (req, res) => {
    try {
      let email = req.body.email;
      let password = bcrypt.hashSync(req.body.password, 10);

      // VALIDATION
      if (!email || !password) {
        return res.status(400).json({
          msg: 'Please enter all fields'
        });
      }

      // CHECK IF USER EXIST
      const user = await User.findOne({
        email
      });
      if (!user) return res.status(400).json({
        error: 'User dose not exist'
      })

      // Validate password
      const isMatch = bcrypt.compare(password, user.password);

      if (!isMatch) return res.status(400).json({
        error: 'invalid password or user name'
      });

      jwt.sign({
          id: user.id
        },
        process.env.jwtSecret, {
          expiresIn: 3600
        },
        (err, token) => {
          if (err) throw err;
          res.json({
            token,
            user: {
              id: user.id,
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email,
              mobile: user.mobile
            }
          });
        }
      )
    } catch (err) {
      res.status(404).json(`error: ${err}`)
    }
  },
}
