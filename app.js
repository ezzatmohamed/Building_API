const express = require('express');
const app = express();
const userApi = require('./api/routes/users');
const commentApi = require('./api/routes/comments');

app.use('/api/users',userApi);
app.use('/api/comments',commentApi);




module.exports = app;