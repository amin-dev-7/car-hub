const Car = require('../models/Car');
const User = require('../models/User');

module.exports = {

  getAllCars: async (req, res) => {
    try{
      const cars = await Car.find({});
      res.status(200).json(cars)
    }catch {
      res.status(404).send('No users found');
    }
  },

  getCarById: async (req, res) => {
    try {
      const carId = req.params.carId;
      const car = await Car.findById(carId);
      res.status(200).json(car);
    } catch {
      res.status(404).json('wrong id')
    }
  },

  updateCarByUserID: async (req, res) => {
    const carId = req.params.carId;
    const car = req.body;
    try{
    const update = await Car.findByIdAndUpdate(carId, car);
    res.status(200).json(update);
    }catch {
    res.status(400).json('update faild');
    }
  },

  deleteCarByUserID: async (req, res) => {
    const carId = req.params.carId;
    const car = req.body;
    try {
      const update = await Car.findOneAndDelete(carId, car);
      res.status(200).json('car deleted');
    } catch {
      res.status(400).json('update faild');
    }
  },

  addCartoSeller: async (res, req) => {
    const seller = await User.findById(req.body.seller);

    const newCar = req.body;
    delete newCar.seller;
    try {
      const car = new Car(newCar);
      car.seller = seller;
      await car.save();
      seller.cars.push(car);
      await seller.save();
      res.status(200).send('car has been added');
    } catch {
      res.status(404).send('No cars has been added');
    }
  }

};
