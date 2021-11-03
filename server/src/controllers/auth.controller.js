const { validationResult } = require('express-validator');

const jwt = require('jsonwebtoken');

require('dotenv').config();

const { JWT_SECRET_KEY } = process.env;

const User = require('../models/user.model');

const newToken = (user) => {
    return jwt.sign({user}, JWT_SECRET_KEY);
};

const register = async (req, res, next) => {

    const errors = validationResult(req);

    let finalErrors = null;

    if(!errors.isEmpty()) {
        finalErrors = errors.array().map(err => {
            return {
                param: err.param,
                msg: err.msg,
            };
        });
        return res.status(400).json({errors: finalErrors});
    };

    let user;
    try {

        user = await User.findOne({email: req.body.email});

        if(user) return res.status(401)
                            .json({
                                status: "failed",
                                message: "User already exists",
                            })
        user = await User.create(req.body);

        const token = newToken(user);

        return res.status(201).json({user, token});

    } catch (err) {
        return res.status(500)
                .json({
                    status: "failed",
                    message: "Sorry for inconveneniece, please try again later"
                });
    }
}

const login = async (req, res, next) => {

    const errors = validationResult(req);
    let finalErrors = null;
    if(!errors.isEmpty()) {
        finalErrors = errors.array().map(err => {
            return {
                param: err.param,
                msg: err.msg,
            };
        });
        return res.status(400).json({error: finalErrors});
    };

    try {
        const user = await User.findOne({email: req.body.email});

        if(!user) return res.status(401)
                            .json({
                                status: "failed",
                                message: "Your email or password is not correct",
                            });
        const match = await user.checkPassword(req.body.password);
        if(!match) return res.status(401)
                                .json({
                                    status: "failed",
                                    message: "Your email or password is not correct",
                                });
        const token = newToken(user);

        return res.status(200).json({user, token});

    } catch (err) {
        return res.status(500)
                    .json({
                        status: "failed",
                        message: err.message//"Sorry for inconveneniece, please try again later",
                    })
    }
}

module.exports = {
    register,
    login
}