const Car = require('../models/Car');

module.exports = {

  getAllCars: async (req, res) => {
    try {
      const cars = await Car.find({}).populate('seller').sort({updatedAt :  -1});
      res.status(200).json(cars)
    } catch (err){
      res.status(404).json(`error: ${err}`)
    }
  },

  getCarById: async (req, res) => {
    const carId = req.params.carId;
    try {
      const car = await Car.findById(carId);
      res.status(200).json(car);
    } catch (err){
      res.status(404).json(`error: ${err}`)
    }
  },

  updateCarByCarId: async (req, res) => {
    const carId = req.params.carId;
    const car = req.body;
    try {
    const update = await Car.findByIdAndUpdate(carId, car);
    res.status(200).json(update);
    } catch (err){
      res.status(404).json(`error: ${err}`)
    }
  },

  deleteCarByCarId: async (req, res) => {
    const carId = req.params.carId;
    const car = req.body;
    try {
      const deleteCar = await Car.findOneAndDelete(carId, car);
      res.status(200).json('Car deleted');
    } catch (err){
      res.status(404).json(`error: ${err}`)
    }
  }
};
