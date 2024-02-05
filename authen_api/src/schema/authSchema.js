const mongoose = require('mongoose');

const authSignUpSchema = new mongoose.Schema({
    username:{
        type : String,
        required : true,
    },
    email:{
        type : String,
        required : true,
        unique : true,
    },
    password:{
        type : String,
        required : true,
    },
    referralcode:{
        type : String,
    },
},{timestamps:true})

module.exports = mongoose.model('AuthSignUp', authSignUpSchema)