module.exports = function(app) {
    app.post('/homeowner', function (req, res){
      var data = { user: req.user}
      res.render('homeowner', data);
    })
    app.get('/homeowner', function (req, res) {
      var data = { user: req.user}
      res.render('homeowner', data);
  });

// Simple route middleware to ensure user is authenticated.
    function ensureAuthenticated(req, res, next) {
      if (req.isAuthenticated()) { return next(); }
      req.session.error = 'Please sign in!';
      res.redirect('/login');
  }
}

