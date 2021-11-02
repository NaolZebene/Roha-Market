const express = require('express'); 
const router = express.Router(); 
const {getAllProducts,getOneProduct,addToCarts,getCarts,clearCart,removeComment,postComment} = require('../controls/userControl')
const ExpressError = require('../utils/ExpressError')
const Joi = require('joi')
const isLoggedIn = function (req, res, next) {
    if (!req.isAuthenticated()) {
      req.session.returnTo = req.originalUrl;
      return res.redirect("/login");
    }
    next();
};

const validateComments = function(req, res, next ){
  const commentsSchema = Joi.object({
    user: Joi.object({
      comment: Joi.string().required(), 
      rating:Joi.number().required()
    }).required()
  })

  const {error} = commentsSchema.validate(req.body); 
  if(error){
    const message = error.details.map(el => el.message).join(',')
    throw new ExpressError(message, 400)
  }
  else{
    next()
  }
}

router.get('/roha',isLoggedIn,getAllProducts)
router.get('/roha/:id',isLoggedIn, getOneProduct)
router.post('/roha/:id/comments',validateComments,isLoggedIn, postComment)
router.delete('/roha/:id/comments/:commentsId',isLoggedIn,removeComment)

router.get('/add/:id', isLoggedIn,addToCarts)
router.get('/carts',isLoggedIn,getCarts)
router.get('/carts/delete',isLoggedIn,clearCart)


module.exports = router; 