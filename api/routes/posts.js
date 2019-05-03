const express = require('express');
const router = express.Router();
const mongo = require('mongoose');

const Post = require('../models/post');


router.get('/',function(req,res){
    Post.find()
    .then(function(data){
        if(data)
        {
            res.status(200).json({
                message : "found some data",
                data : data
            });
        }
        else
            res.status(404).json({message: "No entries found"});
    })
    .catch(function(error){
        res.status(500).json({
            message : "Sorry, an error occured !"
        })
    });
});

router.get('/:id',function(req,res){

    Post.findById(req.params.id)
    .then(function(data){
        console.log(data); 
        if(data)
            res.status(200).json(data);
        else
        {
            res.status(404).json({message: "No Entry is valid"});
        }
    })
    .catch(function(err){console.log(err); res.status(500).json({message : "Error"})});

});

router.post('/',function(req,res)
{
    const post = new Post({
        _id: new mongo.Types.ObjectId(),
        content: req.body.content,
        category: req.body.category
    });
    post.save().then(result=>{console.log(result);}).catch(error =>{ console.log(error);} );

    res.status(201).json({
        message : "created post",
        createdPost : post         
    })

});

router.delete('/:id',function(req,res){
    const id = req.params.id;
    Post.remove({_id: id})
    .then(function(result){
        res.status(200).json(result);
    })
    .catch(function(error){
        res.status(500).json(error);
    });
});

router.patch('/:id',function(req,res){
    const id = req.parms.id;

    const


   // Post.update({_id : id},{set: });
})


module.exports = router;