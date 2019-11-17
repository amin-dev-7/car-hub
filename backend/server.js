require('dotenv').config();
const { mongo, logger } = require('./config');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.urlencoded({
  extended: true
}));

app.use(cors());
app.use(express.json());

app.use('/cars', require('./routes/cars'));
app.use('/users', require('./routes/users'));
//images
app.use('/', express.static('public'));

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('../frontend/bulid'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../', 'frontend', 'bulid', 'index.html'))
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Express server listening on: ${PORT}`));
