const bcrypt = require('bcrypt');
const Car = require('../../models/Car');
const User = require('../../models/User');

module.exports = {

  getUserById: async (req, res) => {
    try {
      const userId = req.params.userId;
      const user = await User.findById(userId);
      res.status(200).json(user);
    } catch {
      res.status(404).json('wrong id')
    }
  },

  updateUserById: (req, res) => {
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
  },

  addCarToUser: async (req, res) => {
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
  },

  getUserCarsByUserId: async (req, res) => {
    try {
      const userId = req.params.userId;
      const user = await User.findById(userId).populate('cars');
      res.status(200).json(user);
    } catch {
      res.status(400).send('wrong id')
    }
  },

};
