/**IMPORTING DATAS */
 require('dotenv').config()

const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const path = require("path");
const ejsMate = require("ejs-mate");
const methodOverride = require("method-override");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStratrgy = require("passport-local");
const ExpressError = require("./utils/ExpressError"); 
const Joi = require("joi");
const auth = require('./routes/auth');
const adminRoute = require("./routes/admin");
const userRoutes = require('./routes/user');
const User = require("./models/Users")
const app = express();
const PORT = 3000;



/**CONNECTING TO MONGOOSE DATABASE */

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



  /***SEETING UP OUR EJS ENGINE */

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

/**CONSFIGURING OUR EXPRESS SESSION */
const sessionConfig = {
  secret: "thisisthesecret",
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
    maxAge: 1000 * 60 * 60 * 24 * 7,
  },
};

/**INTIALIZING ALL OF OUR MIDDLEWARES */

app.use(session(sessionConfig));
app.use(flash());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "/public")));
app.use(methodOverride("_method"));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStratrgy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function (req, res, next) {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currentUser = req.user;
  res.locals.carts = req.session.carts;
  next();
});



/**INTIALZING OUR ROUTES HERE  */
app.use('',auth)
app.post("/login",passport.authenticate("local", {failureFlash: true,failureRedirect: "/login",}),
  function (req, res) {
    const redirectUrl = req.session.returnTo || "roha";
    delete req.session.returnTo;
    res.redirect(redirectUrl);
  }
);

 
app.use('', userRoutes);
app.use('', adminRoute);
app.all('*', function(req, res, next){
  next(new ExpressError('Page Not Found', 404));
})

/**ERROR HANDLER MIDDLEWARE */
app.use(function(err, req, res , next){
  const {statusCode = 500 } = err;
   if(!err.message) {err.message = 'Someting Went Wrong'}
   res.status(statusCode).render('error', {err})
})

app.listen(PORT, function () {
  console.log(`LISTENING ON PORT ${PORT}`);
});
