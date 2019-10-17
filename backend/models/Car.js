const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const carForSaleSchema = new Schema({
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
    type: String,
    required: true
  },
  car_fuel: {
    type: String,
    required: true
  },
  gearbox: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  userId: {
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

module.exports = mongoose.model('Car', carForSaleSchema);
