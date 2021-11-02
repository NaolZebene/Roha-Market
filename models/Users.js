const mongoose = require('mongoose'); 
const passportLocalMongoose = require('passport-local-mongoose'); 
const Schema = mongoose.Schema; 


userSchema = new Schema({
    email :{
        type:String, 
        required: true, 
        unique :true 
    },
    isAdmin:{
        type:Boolean, 
        default:false
    }
  
    
})

userSchema.plugin(passportLocalMongoose); 

Users = mongoose.model('Users', userSchema); 
module.exports = Users;