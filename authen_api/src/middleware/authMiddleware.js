const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');

const authValidation = [
  body('email')
    .notEmpty().withMessage('Email field is required.')
    .bail() // Stops processing if the previous rule failed
    .isLength({ min: 3, max: 40 }).withMessage('Field must be between 3 and 40 characters.'),
  body('password')
    .notEmpty().withMessage('Password field is required.')
    .bail() // Stops processing if the previous rule failed
    .isLength({ min: 3, max: 20 }).withMessage('Field must be between 3 and 20 characters.'),
];

const handleEducationValidationErrors = (req, res, next) => {
  const errors = validationResult(req.body);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  // If validation passes, proceed to the next middleware or route handler
  next();
};

// verify jwt token
function verifyToken(req, res, next) {
  var barearHeader = req.headers['authorization'];
  const token = barearHeader?.split(' ')[1];
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  jwt.verify(token, '32_character_secret_key_enter_here', function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token or expire!' });
    res.status(200).send(decoded);
  });
};


module.exports = { authValidation, handleEducationValidationErrors, verifyToken };  