const path = require('path');
const mongoose = require('mongoose');
const logger = require(path.join(__dirname, 'logger'));

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}, (error) => {
  if (error) {
    console.error(`Mongoose connection failed with the following error ${error}`);
  } else {
    console.log('Mongoose connection successful');
  }
});
mongoose.Promise = global.Promise;

/*
    import models
*/

require(path.join(__dirname, '../models/User'));
require(path.join(__dirname, '../models/Car'));

module.exports = mongoose;
