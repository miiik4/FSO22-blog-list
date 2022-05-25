const config = require('./utils/config');

const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');

const blogsRouter = require('./controllers/blogs');

mongoose
  .connect(config.MONGODB_URI)
  .then(() => console.log('connected to DB!'))
  .catch(() => console.log('could not connect to db'));

app.use(cors());
app.use(express.json());

app.use('/api/blogs', blogsRouter);

module.exports = app;
