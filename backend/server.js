require('dotenv').config();
const { mongo, logger } = require('./config');
const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');

app.use(express.urlencoded({
  extended: true
}));

app.use(cors());
app.use(express.json());

app.use('/cars', require('./routes/cars'));
app.use('/users', require('./routes/users'));

//file upload
app.use('/', express.static('public'));

if (process.NODE_ENV === 'production') {
  app.use(express.static('../frontend/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Express server listening on: ${PORT}`));
