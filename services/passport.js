const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    console.log('called serializeUser')
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    console.log('called deserializeUser')
    User.findById(id).then(user => {
        done(null, user);
    });
})

passport.use(
    new GoogleStrategy(
    {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
        const existingUser = await User.findOne({ googleId: profile.id })

        if (existingUser) {
            // we already have a record with the given Profile ID
            console.log(' User already existed')
            return done(null, existingUser);
        }
            //we don't have a user record with this ID make a new record
            const user = await new User({ googleId: profile.id, name: profile.displayName, email: profile.emails[0].value}).save()
            return done(null, user);
        
    }
)
);