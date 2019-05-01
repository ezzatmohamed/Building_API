const express = require('express');
const router = express.Router();

router.get('/',function(req,res){
    res.status(200).json({
        message : 'okay'
    });
});

router.post('/',function(req,res){
   
    var comment = {
        content : req.body.content,
        postID : req.body.postid,
        user : req.body.user
    };
    
    res.status(200).json({
        message : 'Success',
        comment : comment
    });
});


module.exports = router;