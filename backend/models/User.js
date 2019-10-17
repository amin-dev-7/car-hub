const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  user_name: {
    type: String,
    required: true,
  },
  user_email: {
    type: String,
    unique: true,
    required: true,
  },
  user_mobile: {
    type: Number,
    required: false,
  },
  password: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('user', UserSchema)
