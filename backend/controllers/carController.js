const Car = require('../models/Car');

module.exports = {

  getAllCars: async (req, res) => {
    try {
      if(req.query) {
        const query = req.query;
        const sort = await Car.find(query).sort({updatedAt :  -1});
        res.status(200).json(sort);
      } else {
        const cars = await Car.find({}).populate('seller').sort({updatedAt :  -1});
        res.status(200).json(cars)
      }
    }catch (err){
      res.status(404).send(`error: ${err}`)
    }
  },

  getCarById: async (req, res) => {
    const carId = req.params.carId;
    try {
      const car = await Car.findById(carId).sort({updatedAt :  -1});
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
      const deleteCar = await Car.findByIdAndRemove(carId, car);
      res.status(200).json('Car deleted');
    } catch (err){
      res.status(404).json(`error: ${err}`)
    };
  }
};
