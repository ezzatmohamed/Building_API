const mongo = require('mongoose');

const postSchema = mongo.Schema({
    _id: mongo.Schema.Types.ObjectId,
    content: String,
    category: String 
});


module.exports = mongo.model('Post',postSchema);