require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const {mongo} = require('./config');

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

const router = require(path.join(__dirname, 'routes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Express server listening on ${PORT}`));
