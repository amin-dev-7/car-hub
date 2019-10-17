const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const carsForSaleSchema = new Schema({
    ad_title: {
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
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    fuel: {
        type: String,
        required: true
    },
    gearbox: {
        type: String,
        required: true
    },
    ustomerId: {
        type: String,
        required: true
    },
    date_dded: {
        type: Date,
        default: Date.now()
    }
}, {
    timestamps: true,
});

module.exports = model('Cars', carsForSaleSchema);