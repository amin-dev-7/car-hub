require('dotenv').config();
const {mongo} = require('./config');
const path = require('path');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.urlencoded({
    extended: true
}));

app.use(cors());
app.use(express.json());

const router = require(path.join(__dirname, 'routes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Express server listening on: ${PORT}`));
