const express = require('express');
const router = express.Router();
const mongo = require('mongoose');

const Post = require('../models/post');


router.get(function(req,res){

});

router.post('/',function(req,res)
{
    const post = new Post({
        _id: new mongo.Types.ObjectId(),
        content: req.body.content,
        categroy: req.body.categroy
    });
    post.save().then(result=>{console.log(result);}).catch(error =>{ console.log(error);} );

    res.status(201).json({
        message : "created post",
        createdPost : post         
    })

});




module.exports = router;