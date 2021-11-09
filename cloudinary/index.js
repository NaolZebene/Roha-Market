

const cloudinary = require('cloudinary').v2; 
const { CloudinaryStorage } = require('multer-storage-cloudinary'); 

cloudinary.config({
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET, 
    cloud_name: process.env.CLOUD_NAME
})

const storage = new CloudinaryStorage({
    cloudinary, 
    params:{
        folder:'RohaGebeya', 
        allowedFormats: ['jpg', 'png', 'jpeg']
    }
})

module.exports = {
    cloudinary, 
    storage
}