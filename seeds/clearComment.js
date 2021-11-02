const mongoose = require('mongoose'); 
const Comments = require('../models/Comments'); 

mongoose.connect("mongodb://localhost/roha-gebeya", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(function (data) {
    console.log("DATABASE CONNECTED SUCCESSFULLY");
  })
  .catch(function (e) {
    console.log("ERROR WHILE CONNECTING DATABASE");
    console.log(e);
  });


  clearComments = async function(){
      await Comments.deleteMany(); 
  }

  clearComments().then(function(){
      mongoose.connection.close(); 
      console.log('Cleared Comments Successfully')
      
  }).catch(function(e){
      console.log(e)
  })