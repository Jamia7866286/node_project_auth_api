const jwt = require('jsonwebtoken')

// generate JWT token 
exports.generateAccessToken = (data)=> {
    return jwt.sign(data, "32_character_secret_key_enter_here", { expiresIn: '1h' });
}