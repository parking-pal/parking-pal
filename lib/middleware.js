// Simple route middleware to ensure user is authenticated.

module.exports = {
      ensureAuthenticated: function(req, res, next) {
        if (req.isAuthenticated()) { return next(); }
        req.session.redirectUrl = req.url
        req.session.error = 'Please sign in!';
        res.redirect('/login');
    }
}