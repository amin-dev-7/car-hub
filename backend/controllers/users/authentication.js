const bcrypt = require('bcrypt');
const User = require('../../models/User');
const jwt = require('jsonwebtoken')

module.exports = {

  authentication: async (req, res) => {
    try {
      let email = req.body.email;
      let password = req.body.password;

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
      });

      bcrypt.compare(password, user.password)
        .then(isMatch => {
            if (!isMatch) return res.status(400).json({
              msg: 'Invalid password'
            });

          jwt.sign({
              id: user.id
            },
            process.env.JWTSECRET, {
              expiresIn: 3600
            },
            (err, token) => {
              if (err) throw err;
              res.json({
                token,
                user: {
                  id: user.id,
                  email: user.email,
              }
            });
          }
        );
      });
    } catch (err) {
      res.status(404).json(`error: ${err}`)
    }
  },
}
