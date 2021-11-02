const mongoose = require('mongoose'); 
const Rohamodel = require('../models/Rohamodel'); 

mongoose.connect('mongodb://localhost/roha-gebeya').then(function(data){
    console.log('DATABASE CONNECTED SUCCESSFULLY'); 
}).catch(function(e){
    console.log('ERROR WHILE CONNECTING DATABASE')
    console.log(e);
})

const datas = [
  
    {
        name: 'Phone', 
        price:30000.0, 
        description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Voluptate officia dolor tempora Lorem, ipsum dolor.
        veritatis consectetur dolorum nihil natus omnis ad animi?`,
        address: 'Addis Ababa', 
        category:'Phones', 
        image:`https://images.unsplash.com/photo-1580910051074-3eb694886505?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1530&q=80`
    }, 
    
    {
        name: 'Phone', 
        price:30000.0, 
        description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Voluptate officia dolor tempora Lorem, ipsum dolor.
        veritatis consectetur dolorum nihil natus omnis ad animi?`,
        address: 'Addis Ababa', 
        category:'Phones', 
        image:`https://images.unsplash.com/photo-1580910051074-3eb694886505?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1530&q=80`
    }, 
    {
        name: 'Phone', 
        price:30000.0, 
        description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Voluptate officia dolor tempora Lorem, ipsum dolor.
        veritatis consectetur dolorum nihil natus omnis ad animi?`,
        address: 'Addis Ababa', 
        category:'Phones', 
        image:`https://images.unsplash.com/photo-1580910051074-3eb694886505?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1530&q=80`
    }, 
    
    {
        name: 'Phone', 
        price:30000.0, 
        description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Voluptate officia dolor tempora Lorem, ipsum dolor.
        veritatis consectetur dolorum nihil natus omnis ad animi?`,
        address: 'Addis Ababa', 
        category:'Phones', 
        image:`https://images.unsplash.com/photo-1580910051074-3eb694886505?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1530&q=80`
    }, 
    {
        name: 'Phone', 
        price:30000.0, 
        description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Voluptate officia dolor tempora Lorem, ipsum dolor.
        veritatis consectetur dolorum nihil natus omnis ad animi?`,
        address: 'Addis Ababa', 
        category:'Phones', 
        image:`https://images.unsplash.com/photo-1580910051074-3eb694886505?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1530&q=80`
    }, 
    
    {
        name: 'Phone', 
        price:30000.0, 
        description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Voluptate officia dolor tempora Lorem, ipsum dolor.
        veritatis consectetur dolorum nihil natus omnis ad animi?`,
        address: 'Addis Ababa', 
        category:'Phones', 
        image:`https://images.unsplash.com/photo-1580910051074-3eb694886505?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1530&q=80`
    }, 
    {
        name: 'Phone', 
        price:30000.0, 
        description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Voluptate officia dolor tempora Lorem, ipsum dolor.
        veritatis consectetur dolorum nihil natus omnis ad animi?`,
        address: 'Addis Ababa', 
        category:'Phones', 
        image:`https://images.unsplash.com/photo-1580910051074-3eb694886505?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1530&q=80`
    }, 
    
    {
        name: 'Phone', 
        price:30000.0, 
        description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Voluptate officia dolor tempora Lorem, ipsum dolor.
        veritatis consectetur dolorum nihil natus omnis ad animi?`,
        address: 'Addis Ababa', 
        category:'Phones', 
        image:`https://images.unsplash.com/photo-1580910051074-3eb694886505?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1530&q=80`
    }, 
    {
        name: 'Phone', 
        price:30000.0, 
        description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Voluptate officia dolor tempora Lorem, ipsum dolor.
        veritatis consectetur dolorum nihil natus omnis ad animi?`,
        address: 'Addis Ababa', 
        category:'Phones', 
        image:`https://images.unsplash.com/photo-1580910051074-3eb694886505?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1530&q=80`
    }, 
    
    {
        name: 'Phone', 
        price:30000.0, 
        description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Voluptate officia dolor tempora Lorem, ipsum dolor.
        veritatis consectetur dolorum nihil natus omnis ad animi?`,
        address: 'Addis Ababa', 
        category:'Phones', 
        image:`https://images.unsplash.com/photo-1580910051074-3eb694886505?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1530&q=80`
    }, 
    {
        name: 'Phone', 
        price:30000.0, 
        description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Voluptate officia dolor tempora Lorem, ipsum dolor.
        veritatis consectetur dolorum nihil natus omnis ad animi?`,
        address: 'Addis Ababa', 
        category:'Phones', 
        image:`https://images.unsplash.com/photo-1580910051074-3eb694886505?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1530&q=80`
    }, 
    
    {
        name: 'Phone', 
        price:30000.0, 
        description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Voluptate officia dolor tempora Lorem, ipsum dolor.
        veritatis consectetur dolorum nihil natus omnis ad animi?`,
        address: 'Addis Ababa', 
        category:'Phones', 
        image:`https://images.unsplash.com/photo-1580910051074-3eb694886505?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1530&q=80`
    }, 
    {
        name: 'Phone', 
        price:30000.0, 
        description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Voluptate officia dolor tempora Lorem, ipsum dolor.
        veritatis consectetur dolorum nihil natus omnis ad animi?`,
        address: 'Addis Ababa', 
        category:'Phones', 
        image:`https://images.unsplash.com/photo-1580910051074-3eb694886505?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1530&q=80`
    }, 
    
    {
        name: 'Phone', 
        price:30000.0, 
        description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Voluptate officia dolor tempora Lorem, ipsum dolor.
        veritatis consectetur dolorum nihil natus omnis ad animi?`,
        address: 'Addis Ababa', 
        category:'Phones', 
        image:`https://images.unsplash.com/photo-1580910051074-3eb694886505?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1530&q=80`
    }, 
    {
        name: 'Phone', 
        price:30000.0, 
        description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Voluptate officia dolor tempora Lorem, ipsum dolor.
        veritatis consectetur dolorum nihil natus omnis ad animi?`,
        address: 'Addis Ababa', 
        category:'Phones', 
        image:`https://images.unsplash.com/photo-1580910051074-3eb694886505?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1530&q=80`
    }, 
    
    {
        name: 'Phone', 
        price:30000.0, 
        description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Voluptate officia dolor tempora Lorem, ipsum dolor.
        veritatis consectetur dolorum nihil natus omnis ad animi?`,
        address: 'Addis Ababa', 
        category:'Phones', 
        image:`https://images.unsplash.com/photo-1580910051074-3eb694886505?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1530&q=80`
    }, 
    {
        name: 'Phone', 
        price:30000.0, 
        description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Voluptate officia dolor tempora Lorem, ipsum dolor.
        veritatis consectetur dolorum nihil natus omnis ad animi?`,
        address: 'Addis Ababa', 
        category:'Phones', 
        image:`https://images.unsplash.com/photo-1580910051074-3eb694886505?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1530&q=80`
    }, 
    
    {
        name: 'Phone', 
        price:30000.0, 
        description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Voluptate officia dolor tempora Lorem, ipsum dolor.
        veritatis consectetur dolorum nihil natus omnis ad animi?`,
        address: 'Addis Ababa', 
        category:'Phones', 
        image:`https://images.unsplash.com/photo-1580910051074-3eb694886505?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1530&q=80`
    }, 
    {
        name: 'Phone', 
        price:30000.0, 
        description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Voluptate officia dolor tempora Lorem, ipsum dolor.
        veritatis consectetur dolorum nihil natus omnis ad animi?`,
        address: 'Addis Ababa', 
        category:'Phones', 
        image:`https://images.unsplash.com/photo-1580910051074-3eb694886505?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1530&q=80`
    }, 
    
    {
        name: 'Phone', 
        price:30000.0, 
        description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Voluptate officia dolor tempora Lorem, ipsum dolor.
        veritatis consectetur dolorum nihil natus omnis ad animi?`,
        address: 'Addis Ababa', 
        category:'Phones', 
        image:`https://images.unsplash.com/photo-1580910051074-3eb694886505?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1530&q=80`
    }

   
]; 

const seedDb = async function(){
    await Rohamodel.deleteMany({}); 
    const Datas = await Rohamodel.insertMany(datas);  
}

seedDb().then(function(){
    mongoose.connection.close(); 
})