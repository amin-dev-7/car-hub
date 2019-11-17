const bcrypt = require('bcrypt');
const User = require('../../models/User');
const Car = require('../../models/Car')

module.exports = {

  getUserById: async (req, res) => {
    try {
      const userId = req.params.userId;
      const user = await User.findById(userId);
      res.status(200).json(user);
    } catch (err){
      res.status(404).json(`error: ${err}`)
    }
  },

  updateUserById: async(req, res) => {
    const userId = req.params.userId;
    const user = req.body;
    try {
    user.password = bcrypt.hashSync(req.body.password, 10);
    const update = user.update = await User.findByIdAndUpdate(userId, user);
    res.status(200).json(update);
    } catch (err){
      res.status(404).json(`error: ${err}`)
    }
  },

  addCar: async (req, res) => {
  try {
    const userId = req.params.userId;
    let carImage = req.file.filename;
    const newCar = new Car(req.body);
    const user = await User.findById(userId);
    newCar.seller = user;
    newCar.carImage = carImage;
    await newCar.save();
    user.cars.push(newCar);
    const car = await user.save();
    res.status(200).json(car);
    } catch (err) {
      res.status(404).json(`error: ${err}`)
      console.log(err);
    }
  },

  getUserAuth: (req, res) => {
    User.findById(req.user.id)
      .select('-password')
      .then(user => res.json(user))
  },

  getCarsByUserId: async (req, res) => {
    try {
      const userId = req.params.userId;
      const user = await User.findById(userId).populate('cars');
      res.status(200).json(user);
    } catch (err){
      res.status(404).json(`error: ${err}`)
    }
  },

  getAllUsersAndCars: async (req, res) => {
    try {
      const users = await User.find({}).populate('cars');
      res.status(200).json(users);
    } catch (err){
      res.status(404).json(`error: ${err}`)
    }
  }
};

