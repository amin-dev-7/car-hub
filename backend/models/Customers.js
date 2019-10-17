const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const customersSchema = new Schema({
  customer_name: {
    type: String,
    required: true
  },
  customer_email: {
    type: String,
    required: true
  },
  customer_mobile: {
    type: Number,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = model('Customers', customersSchema);
