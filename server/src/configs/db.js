const mongoose = require('mongoose');

require('dotenv').config();

const { DB_PASSWORD } = process.env;

module.exports = () => {
    return mongoose.connect(`mongodb+srv://CapdaS:${DB_PASSWORD}@capdas.normt.mongodb.net/CapdaSDB?retryWrites=true&w=majority`);
};