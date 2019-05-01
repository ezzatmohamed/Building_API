const express = require('express');
const app = express();
const userApi = require('./api/routes/users');

app.use('/users',userApi);

module.exports = app;