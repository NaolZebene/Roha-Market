const wrapAsync  = require('../utils/wrapAsync')
const Rohamodel = require("../models/Rohamodel")
const User = require("../models/Users"); 
const Comments = require("../models/Comments")


module.exports.getAllProducts = wrapAsync(async function (req, res) {
    const datas = await Rohamodel.find({});
    res.render("show", { datas });
  })

module.exports.getOneProduct = wrapAsync (async function (req, res) {
    const { id } = req.params;
    const userId = req.user.id; 
    const user = await User.findById(userId); 
    const data = user.isCarted; 
   
    const oneData = await Rohamodel.findById(id).populate({
      path: "comments",
      populate: {
        path: "author",
      },
    });

    res.render("showone", { oneData,data });
  })

module.exports.postComment = wrapAsync(async function (req, res) {
    const { id } = req.params;
    const data = await Rohamodel.findById(id);
    const commentData = req.body.user;
    const comment = new Comments(commentData);
    comment.author = req.user._id;
    data.comments.push(comment);
    await comment.save();
    await data.save();
  
    req.flash('success', 'Added A review Successfully')
    res.redirect(`/roha/${data._id}`);
  })
module.exports.addToCarts = wrapAsync(async function(req, res){
    const { id } = req.params; 
    const cartData = await Rohamodel.findById(id);
    const cartSatate = req.session.carts;
    if(cartSatate == undefined){
      req.session.carts = []; 
      req.session.carts.push({
        id:cartData._id,
        name:cartData.name, 
        price:cartData.price, 
        description:cartData.description, 
        image:cartData.image, 
        category:cartData.category,
        username:req.user.username
      })
      res.redirect(`/roha/${id}`)
    
    }else {
   
        req.session.carts.push({
        id:cartData._id,
        name : cartData.name, 
        price:cartData.price, 
        description:cartData.description, 
        image:cartData.image, 
        category:cartData.category,
        username:req.user.username
  
      })
      res.redirect(`/roha/${id}`)
    
    }  
  })

module.exports.getCarts =function(req, res){
    res.render('cartdisplay');
}

module.exports.clearCart = function(req,res){
    delete req.session.carts; 
    req.flash('success','Cleared Carts')
    res.redirect('/carts')
  }


  
module.exports.removeComment = wrapAsync(async function (req, res) {
  const { id, commentsId } = req.params;
  const data = await Comments.findById(commentsId);
  const authorId = data.author._id;
  if (!authorId.equals(req.user._id)) {
    return res.redirect(`/roha/${id}`);
  }
  
  await Rohamodel.findByIdAndUpdate(id, { $pull: { comments: commentsId } });
  await Comments.findByIdAndDelete(id);
  req.flash('success', 'Deleted A Review Successfully')
  res.redirect(`/roha/${id}`);
})

module.exports.buyProducts = function(req,res){
  res.send('Coming Soon');
}