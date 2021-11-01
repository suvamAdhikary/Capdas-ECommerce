const jwt = require('jsonwebtoken');

require('dotenv').config();

const { JWT_SECRET_KEY } = process.env;

const User = require('../models/user.model');

const newToken = (user) => {
    return jwt.sign({user}, JWT_SECRET_KEY);
};

