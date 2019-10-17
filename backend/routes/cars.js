const express = require('express');
const router = express.Router();

const cars = require('../models/Cars');

router.route('/').get((req, res) => {
    cars.find()
        .then(cars => res.json(cars))
        .catch(err => res.status(400).json('Error: ' + err))
});

module.exports = router;

