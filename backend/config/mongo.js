const path = require('path');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true
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

module.exports = mongoose;