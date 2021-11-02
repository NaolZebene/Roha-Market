const mongoose = require('mongoose'); 
const Category = require('../models/Category'); 

mongoose.connect('mongodb://localhost/roha-gebeya').then(function(data){
    console.log('DATABASE CONNECTED SUCCESSFULLY'); 
}).catch(function(e){
    console.log('ERROR WHILE CONNECTING DATABASE')
    console.log(e);
})

const datas = [
    {
        categoryname: 'Electronics', 
        image:`1_4.jpg`
    }, 
    
    {
        categoryname: 'Vegitables',  
        image:`1_2.jpg`
    }, 
    {
         categoryname: 'Decoration ',
        image:`1_3.jpg`
    },
    {
         categoryname: 'Phones',
        image:`1_3.jpg`
    },
    {
         categoryname: 'Computers',
        image:`1_3.jpg`
    },
    {
         categoryname: 'Shoes',
        image:`1_3.jpg`
    },
    {
         categoryname: 'Clothes',
        image:`1_3.jpg`
    }
]

const seedDb = async function(){
    //await Category.deleteMany()
    const Datas = await Category.insertMany(datas);  
}

seedDb().then(function(){
    mongoose.connection.close(); 
})