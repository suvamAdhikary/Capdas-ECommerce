const express = require('express');

const app = express();

const { body } =require('express-validator');

app.use(express.urlencoded({extended: false}));

app.use(express.json());


const { register, login } = require('./controllers/auth.controller');


app.post('/register',
    body("name").trim().isLength({min: 3}).withMessage('Full name is required'),
    body("email").trim().isEmail().withMessage('Email is required and should be a valid email address'),
    body("password").trim().isStrongPassword().withMessage('Password is required and should be a strong password'),
    register
);

app.post('/login',
    body("email").trim().isEmail().withMessage('Email is required and should be a valid email address'),
    body("password").trim().isStrongPassword().withMessage('Password is required and should be a strong password'),
    login
);


module.exports = app;