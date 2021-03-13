const express = require('express');

const app = express();
const apiController = require('./api/routes/controller');

app.use('/api', apiController);

module.exports = app;