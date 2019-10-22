const Car = require('../models/Car');

module.exports = {

  getAllCars: async (req, res) => {
    try{
      const cars = await Car.find({});
      res.status(200).json(cars)
    }catch {
      res.status(404).send('No user found');
    }
  },

  getCarById: async (req, res) => {
    try {
      const carId = req.params.carId;
      const car = await Car.findById(carId);
      res.status(200).json(car);
    } catch {
      res.status(404).json('No car found')
    }
  },

  updateCarByUserID: async (req, res) => {
    const carId = req.params.carId;
    const car = req.body;
    try{
    const update = await Car.findByIdAndUpdate(carId, car);
    res.status(200).json(update);
    }catch {
    res.status(400).json('Could not update the car');
    }
  },

  deleteCarByUserID: async (req, res) => {
    const carId = req.params.carId;
    const car = req.body;
    try {
      const update = await Car.findOneAndDelete(carId, car);
      res.status(200).json('Car deleted');
    } catch {
      res.status(400).json('Could not delete the car ');
    }
  },
};
