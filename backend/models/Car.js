const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carSchema = new Schema({
  adTitle: {
    type: String,
    required: true
  },
  adDescription: {
    type: String,
    required: true
  },
  carCategory: {
    type: String,
    required: true
  },
  carBrand: {
    type: String,
    required: true
  },
  carModel: {
    type: String,
    required: true
  },
  carModelYear: {
    type: Number,
    required: true
  },
  carFuel: {
    type: String,
    required: true,
  },
  gearbox: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  seller: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true,
});

module.exports = mongoose.model('Car', carSchema);

