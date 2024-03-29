const wrapAsync = require("../utils/wrapAsync")
const Rohamodel = require("../models/Rohamodel")
const User = require("../models/Users")
const Category = require("../models/Category")




module.exports.addProduct = async function (req, res) {
  const {isAdmin} = req.user; 
  const datas = req.body.roha;
  if(!isAdmin){
    return res.redirect('/roha')
  }
  const data = new Rohamodel(datas);
  data.image = req.files.map(fileData =>({
    url: fileData.path, 
    filename: fileData.filename
  }))
  await data.save();

  req.flash('success', 'Added a Product Successfully')
  res.redirect("/roha");
}



module.exports.addCategory = wrapAsync(async function(req,res){
    const data = req.body
  
    const addedData = new Category(data);
    await addedData.save()
    req.flash('success', 'Added A Category')
    res.redirect('/categories')
  })


module.exports.showCategories = wrapAsync(async function(req,res){
    const data = await Category.find(); 
    console.log(data)
    res.render('categories', {data})
  })


module.exports.deleteCategory = wrapAsync(async function(req,res){
    const { id } = req.params; 
  
    await Category.findByIdAndDelete(id); 
    res.redirect('/categories')

  })





module.exports.editProductForm = wrapAsync(async function (req, res) {
    const {isAdmin} = req.user
    if(!isAdmin){
      return res.redirect(`/roha/${id}`);
    }
    const { id } = req.params;
    const data = await Rohamodel.findById(id);
    const category = await Category.find()
    res.render("edit", { data,category });
  })


module.exports.editProduct = async function (req, res) {
    const data = req.body;
    
    const {isAdmin} = req.user
    const { id } = req.params;
    if(!isAdmin){
      return res.redirect(`/roha/${id}`);
    }
    const updatedData = await Rohamodel.findByIdAndUpdate(id, data, {
      runValidators: true,
    });
    updatedData.image = req.files.map(fileData =>({
      url: fileData.path, 
      filename: fileData.filename
    }))
    await updatedData.save()
    req.flash('success', 'Updated a Product Successfully')
    res.redirect(`/roha/${updatedData._id}`);
  
  }


module.exports.addCategoriesForm = function(req,res){
    const{isAdmin} = req.user
    if(!isAdmin){
      return res.redirect('/roha');
    }
    res.render('addcategories')
  
  }

module.exports.removeProduct = wrapAsync(async function (req, res) {
    const { id } = req.params;
    const {isAdmin} = req.user
    if(!isAdmin){
      return res.redirect(`/roha/${id}`)
    }
    const deletedData = await Rohamodel.findByIdAndDelete(id);
    req.flash('success', 'Deleted a Product Successfully')
    res.redirect("/roha");
  })
  module.exports.addProductForm = wrapAsync(async function (req, res) {
    const { isAdmin } = req.user || false;
    if (!isAdmin) {
      return res.redirect("/roha");
    }
    const category = await Category.find()
    res.render("addProducts",{category});
  })