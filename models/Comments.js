const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

commentSchema = new Schema({
    comment:{
        type:String, 
    }, 
    rating:{
        type:Number,
        required:true
    }, 
    author:{
        type:mongoose.Types.ObjectId, 
        ref:'Users'
    }
})

Comments = mongoose.model('Comments', commentSchema); 

module.exports = Comments