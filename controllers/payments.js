module.exports = function(app) {
    app.get('/payments', function (req, res) {
      res.render('payments');
  });

// Simple route middleware to ensure user is authenticated.
    function ensureAuthenticated(req, res, next) {
      if (req.isAuthenticated()) { return next(); }
      req.session.error = 'Please sign in!';
      res.redirect('/login');
    }
}