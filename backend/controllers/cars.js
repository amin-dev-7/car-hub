const Car = require('../models/Car');
const User = require('../models/User');

module.exports = {

  getAllCars: async (req, res) => {
    try{
      const cars = await Car.find({}).populate('seller');
      res.status(200).json(cars)
    }catch {
      res.status(400).json('no users');
    }
  },

  addCartoSeller: async (res, req) => {

  },

  updateCarByUserID: async (req, res) => {

  },

  deleteCarByUserID: async (req, res) => {

  }

};
