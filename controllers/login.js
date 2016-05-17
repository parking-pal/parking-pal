var passport = require('passport');

module.exports = function(app) {
  app.get('/login', function (req, res) {
    res.render('login', {redirect: req.query.redirect});
  });

  app.post('/login', 
    passport.authenticate('local', { failureRedirect: '/login' }), function(req, res, next) {
      return res.redirect('/');  
  });
  
};
