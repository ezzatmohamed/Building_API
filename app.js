const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

const userApi = require('./api/routes/users');
const commentApi = require('./api/routes/comments');

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin","Content-Type");
    if(req.method ==="OPTION")
    {
        res.header("Access-Control-Allow-Methods","PUT,POST,GET,PUT,PATCH");
        return res.status(200).json({});
    }
    next();

})


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