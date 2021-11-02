const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 


//mongoose.set('debug', true )
mongoose.Promise = Promise;


const RohaSchema = new Schema({
    name: {
        type:String, 
        required: true
    },  
    price : {
        type:Number, 
        required:true
    }, 
    description:{
        type:String
    },  
    address : {
        type:String, 
        required:true
    },  
    category:{
        type:String, 
        required:true
    },
    image:{
        type:String, 
        required:true
    }, 
    comments:[
        {
            type:mongoose.Types.ObjectId,
            ref:'Comments'
        }
    ], 
    
    
    
}); 

const Rohamodel = mongoose.model('Rohamodel', RohaSchema); 

RohaSchema.post('findOneAndDelete', async function(doc){
    if(doc){
        await Comments.deleteMany({
            _id:{
               $in: doc.comments 
            }
        })
    }
})

module.exports = Rohamodel;


