var passport = require('passport');

const fbPassport = passport;

require("dotenv").config();

const { v4: uuidv4 } = require('uuid');

const FacebookStrategy = require('passport-facebook').Strategy;

const User = require('../models/user.model');

const {newToken} = require('../controllers/auth.controller');

const { PORT, FACEBOOK_APP_ID, FACEBOOK_APP_SECRET } = process.env;

const url = `http://localhost:${PORT}`;

fbPassport.use(new FacebookStrategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: `${url}/auth/facebook/callback`,
    profileFields: ['displayName', 'name', 'photos', 'email']
  },
  async function(accessToken, refreshToken, profile, cb) {

      let user = await User.findOne({email: profile?._json?.email});

      if(!user){
          user = await User.create({
            email: profile?._json?.email,
            password: uuidv4()
          });
      }
  
  
      const token = newToken(user);

    // User.findOrCreate({ facebookId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
    return cb(null, {user, token});
  }
));

module.exports = fbPassport;