const mongoose = require('mongoose');
const Users = require ('../models/Users')
const passport = require('passport'); 
const localStrategy = require('passport-local'); 
const express = require('express'); 
const session = require('express-session'); 
const app = express(); 
mongoose.connect('mongodb://localhost/roha-gebeya', {useUnifiedTopology: true , useNewUrlParser:true}).then(function(data){
    console.log('DATABASE CONNECTED SUCCESSFULLY'); 
}).catch(function(e){
    console.log('ERROR WHILE CONNECTING DATABASE')
    console.log(e);
})
sessionConfig = {
    secret:'thisisthesceret', 
    resave: true, 
    saveUninitialized:false
}

app.use(passport.initialize())
app.use(passport.session())
passport.use(new localStrategy(Users.authenticate()))
passport.serializeUser(Users.serializeUser()); 
passport.deserializeUser(Users.deserializeUser());



const Admin = {
    email:'naolzebene@gmail.com' , 
    username:'NaolZebene', 
    password:'naolzebene', 
    isAdmin :true
}

userClean = async function(){
    await Users.deleteMany({})
    const {email , username , password , isAdmin } = Admin ; 
    const userAdmin = new Users({email, username,isAdmin}); 
    const registeredAdmin = await Users.register(userAdmin , password); 

}

userClean().then(function(){
    mongoose.connection.close(); 
}).catch(function(e){
console.log(e)
})