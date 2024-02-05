const mongoose = require('mongoose');

const mongooseConnectionMiddleware = (req,res,next) =>{
    if(mongoose.connection.readyState !== 1){
        return res.status(500).json({error:"Database not connected"});
    }
    next();
};

module.exports = mongooseConnectionMiddleware;