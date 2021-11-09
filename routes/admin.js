const express = require('express'); 
const router = express.Router(); 
const{addProductForm,addCategory,showCategories,deleteCategory,addProduct,editProductForm,editProduct,addCategoriesForm,removeProduct} = require("../controls/adminControl")
const ExpressError = require('../utils/ExpressError')
const {storage} = require('../cloudinary'); 
const multer = require('multer'); 
const upload = multer({storage}); 

const isLoggedIn = function (req, res, next) {
    if (!req.isAuthenticated()) {
      req.session.returnTo = req.originalUrl;
      return res.redirect("/login");
    }
    next();
};

const Joi = require("joi")


const validateProduts = function(req, res, next ){
  const productsSchema = Joi.object({
    roha : Joi.object({
      name: Joi.string().required(), 
      price:Joi.number().required(),
      image:Joi.array().required, 
      category: Joi.string().required(),
      description:Joi.string(), 
      address:Joi.string().required()
    }).required()
  })

  const {error} = productsSchema.validate(req.body); 
  if(error){
    const message = error.details.map(el => el.message).join(',')
    throw new ExpressError(message, 400)
  }
  else{
    next()
  }
}


router.get('/admin',isLoggedIn,addProductForm)
// router.post('/roha', isLoggedIn,validateProduts ,addProduct)
router.post('/roha',upload.array('image'),validateProduts,isLoggedIn,addProduct)
router.get('/roha/:id/edit', isLoggedIn,editProductForm)
router.put('/roha/:id/edit',upload.array('image'),isLoggedIn, editProduct)
router.delete('/roha/:id', isLoggedIn,removeProduct)

router.get('/addcategories', isLoggedIn,addCategoriesForm)
router.post('/category/add', isLoggedIn,addCategory)
router.get('/categories', isLoggedIn,showCategories)
router.get('/categories/:id', isLoggedIn, deleteCategory)




module.exports = router; 