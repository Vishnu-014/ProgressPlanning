const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const ProgressRoutes = require('./routes/progress-routes')

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  next();
});

app.use('/api/progress', ProgressRoutes);

const URI = process.env.ATLAS_URI;
mongoose.connect(URI).then(() => {
  app.listen(port);
  console.log(`${port}`);
}).catch((err) => {
  console.log(err);
});
