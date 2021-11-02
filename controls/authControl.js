const wrapAsync = require("../utils/wrapAsync");
const User = require ('../models/Users');
const passport = require("passport");

module.exports.registerForm = function(req,res){
    res.render('registerForm')
}
module.exports.register = wrapAsync(async function (req, res) {
    const { email, username, password } = req.body;
    const user = new User({ email, username });
    const hashedUserInfo = await User.register(user, password);
    req.login(hashedUserInfo, function (e) {
      if (e) return console.log(e);
      res.redirect("/roha");
    }
)})

module.exports.loginForm =  function (req, res) {
    res.render("loginForm");
  }

// module.exports.login = passport.authenticate("local", {failureFlash: true,failureRedirect: "/login",}),function (req, res) {
//   const redirectUrl = req.session.returnTo || "roha";
//   delete req.session.returnTo;
//   //console.log(redirectUrl);
//   req.flash('success', 'Welcome back ')
//   res.redirect(redirectUrl);
// }


module.exports.logoutUser =  function (req, res) {
    delete req.session.carts
    req.logout();
    res.redirect("/login");
  }