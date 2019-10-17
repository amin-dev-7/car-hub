require('dotenv').config();
const {mongo} = require('./config');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.urlencoded({
  extended: true
}));

app.use(cors());
app.use(express.json());

const cars = require('./routes/cars');
const users = require('./routes/users');

app.use('/cars', cars);
app.use('/users', users)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Express server listening on: ${PORT}`));
