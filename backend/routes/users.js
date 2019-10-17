const express = require('express');
const router = express.Router();

const users = require('../models/User');

router.route('/').get((req, res) => {
  users.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err))
});

module.exports = router;
