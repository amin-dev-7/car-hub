require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {mongo} = require('./config');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

const router = require(path.join(__dirname, 'routes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Express server listening on ${PORT}`));
