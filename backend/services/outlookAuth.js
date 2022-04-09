const OutlookStrategy = require( 'passport-outlook' ).Strategy;
const passport = require('passport')
const User = require('../models/userModel')
require('dotenv').config()

passport.use(new OutlookStrategy({
    clientID:    process.env.OUTLOOK_CLIENT_ID,
    clientSecret: process.env.OUTLOOK_CLIENT_SECRET,
    callbackURL: process.env.OUTLOOK_CALLBACK_URL,
    passReqToCallback: true
  },
  function(request, accessToken, refreshToken, profile, done) {
      
        User.findOne({thirdPartyId: profile.id})
            .then((currentUser) => {
                if(currentUser){
                    done(null, currentUser)
                }
                else{
                    new User({
                        thirdPartyId: profile.id,
                        username: profile.displayName,
                    })
                        .save()
                        .then((newUser) => {done(null, newUser)})
                }
            })
       
        
  }
));

passport.serializeUser((user,done) =>{
    done(null, user)
})

passport.deserializeUser((user, done) =>{
    done(null, user)
})