const express = require('express');
const router = express.Router();


router.get('/',function(req,res){
    res.status(200).json({
        message : 'Get Works'
    });
});


router.get('/:id',function(req,res){
    res.status(200).json({
        id : req.params.id,
        message : 'it works'
    });
});

router.post('/',function(req,res){
    
    var name = req.body.name;
    var password = req.body.password;
    var address = req.body.address;
    
    var user = {
        name : name,
        password : password,
        address : address
    };
    res.status(200).json({
        message:'Post Works',
        user: user
    });
});

module.exports = router;