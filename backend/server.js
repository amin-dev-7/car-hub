require('dotenv').config();
const { mongo, logger } = require('./config');
const express = require('express');
const cors = require('cors');
const path =require('path')
const app = express();

app.use(express.urlencoded({
  extended: true
}));

app.use(cors());
app.use(express.json());

app.use('/cars', require('./routes/cars'));
app.use('/users', require('./routes/users'));

app.use('/static', express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Express server listening on: ${PORT}`));

