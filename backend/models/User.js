const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const userSchema = new Schema({
  user_name: {
    type: String,
    required: true
  },
  user_email: {
    type: String,
    required: true
  },
  user_mobile: {
    type: Number,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = model('User', userSchema);
