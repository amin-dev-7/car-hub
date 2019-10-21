const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  mobile: {
    type: Number,
    required: false
  },
  password: {
    type: String,
    required: true,
  },
  cars: [{
    type: Schema.Types.ObjectId,
    ref: 'Car'
  }],
}, {
  timestamps: true,
});

module.exports = mongoose.model('User', userSchema);

// {
//   "adTitle": "asdasd",
//   "adDescription": "ASasasdsdfdsfdsD",
//   "carCategory": "1111",
//   "carBrand": "44",
//   "carModel": "asd",
//   "carModelYear": 1991,
//   "carFuel": "disesl",
//   "gearbox": "1dsa",
//   "price": 1234,
//   "location": "götwboasdasdasdrg"
// }

// {
//   "firstName": "asdasd",
//   "lastName": "ASasasdsdfdsfdsD",
//   "email": "1111",
//   "mobile": "44",
//   "password": "44"
// }
