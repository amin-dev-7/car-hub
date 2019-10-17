const express = require('express');
const router = express.Router();

let Cars = require('../models/Car');

router.route('/').get((req, res) => {
  Cars.find()
    .then(Cars => res.json(Cars))
    .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/add').post((req, res) => {

});

module.exports = router;

