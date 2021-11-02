var passport = require('passport');

const googlePassport = passport;

require("dotenv").config();

const { v4: uuidv4 } = require('uuid');

var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;;

const User = require('../models/user.model');

const {newToken} = require('../controllers/auth.controller');

const { PORT, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;

const url = `http://localhost:${PORT}`;

googlePassport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: `${url}/auth/google/callback`,
  },
  async function(accessToken, refreshToken, profile, done) {
    // first check if user with given email exists
    let user = await User.findOne({email: profile?._json?.email});

    if(!user){
        // else create the user and then create the token
        user = await User.create({
          email: profile?._json?.email,
          password: uuidv4()
        });
    }

    // if yes then create the token for this user
    const token = newToken(user);

    //     const user = await User.find({ googleId: profile.id }, function (err, user) {
    //      return done(err, user);
    //    });
    // console.log("profile :", profile, "token :", token);
    return done(null, {user, token});
  }
));

module.exports = googlePassport;