const passport = require('passport');

module.exports = app => {
    app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/userinfo.email']
        })
    );

    app.get(
        '/auth/google/callback',
        passport.authenticate('google'),
        (req, res) => {
            res.redirect('/bags');
        }
    );

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/bags');
    });
    
    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    })
};