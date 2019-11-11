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

app.use('/uploads', express.static(path.join(__dirname, 'public')))
app.use('/cars', require('./routes/cars'));
app.use('/users', require('./routes/users'));

// app.get('/uploads', (req, res) => {
//   files.findOne({ filename: req.params.filename }, (err, file) => {
//         // Check if file
//     if (!file || file.length === 0) {
//       return res.status(404).json({
//         err: "No file exists"
//       });
//     }
// })

// app.get("/:filename", (req, res) => {
//   files.findOne({ filename: req.params.filename }, (err, file) => {
//     // Check if file
//     if (!file || file.length === 0) {
//       return res.status(404).json({
//         err: "No file exists"
//       });
//     }
//   });
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Express server listening on: ${PORT}`));

