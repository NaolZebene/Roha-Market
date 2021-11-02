const express = require('express'); 
const router = express.Router(); 
const {registerForm,register,loginForm, login, logoutUser} = require('../controls/authControl')
const ExpressError = require("../utils/ExpressError"); 




router.get('/register',registerForm)
router.post('/register',register)

router.get('/login', loginForm)
//  router.post('/login', login)

router.get ('/logout', logoutUser)


module.exports = router; 