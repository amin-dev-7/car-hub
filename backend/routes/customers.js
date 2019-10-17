const express = require('express');
const router = express.Router();

const customers = require('../models/Customers');

router.route('/').get((req, res) => {
  customers.find()
    .then(customers => res.json(customers))
    .catch(err => res.status(400).json('Error: ' + err))
});

module.exports = router;
