const express = require('express');
const app = express();
const userApi = require('./api/routes/users');
const commentApi = require('./api/routes/comments');

app.use('/api/users',userApi);
app.use('/api/comments',commentApi);
app.use(function(req,res,next){
    const error = new Error('Not FOund  !');
    error.status = 404;
    next(error);
});

app.use(function(error,req,res,next){
    res.status(error.status || 500);
    res.json({
        error: {
            message : error.message
        }
    });
});


module.exports = app;