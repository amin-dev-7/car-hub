const Car = require('../models/Car');

module.exports = {

  getAllCars: ((req, res) => {
    Car.find()
      .then(Car => res.json(Car))
      .catch(err => res.status(400).json('Error: ' + err))
  })

};
