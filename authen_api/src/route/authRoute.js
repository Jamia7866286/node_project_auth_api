var express = require('express');
var authRoute = express.Router();
const authController = require('../controller/authController')
const {authValidation,handleEducationValidationErrors, verifyToken} = require('../middleware/authMiddleware');


// Login api
// authRoute.post('/login', authValidation, verifyToken, handleEducationValidationErrors, authController.loginAuth);
authRoute.post('/login', authValidation, handleEducationValidationErrors, authController.loginAuth);
  
// signup api
authRoute.post('/signup', authController.signupAuth);



module.exports = authRoute;