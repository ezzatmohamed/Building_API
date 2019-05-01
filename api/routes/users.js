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
    res.status(200).json({
        message:'Post Works'
    });
});

module.exports = router;