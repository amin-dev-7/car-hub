const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const carSchema = new Schema({
  ad_title: {
    type: String,
    required: true
  },
  ad_description: {
    type: String,
    required: true
  },
  car_brand: {
    type: String,
    required: true
  },
  car_model: {
    type: String,
    required: true
  },
  car_model_year: {
    type: Number,
    required: true
  },
  car_category: {
    type: Array,
    default: ['SUV', 'sedan', 'halvcombi', 'coupe']
  },
  car_fuel: {
    type: Array,
    required: true,
    default: ['bensin', 'diesel', 'hyprid', 'el']
  },
  gearbox: {
    type: Array,
    default: ['manuell', 'automat']
  },
  price: {
    type: Number,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  date_added: {
    type: Date,
    default: Date.now()
  }
}, {
  timestamps: true,
});

module.exports = mongoose.model('Car', carSchema);

