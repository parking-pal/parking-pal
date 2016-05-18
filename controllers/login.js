var passport = require('passport');

module.exports = function(app) {
  app.get('/login/:usertype?/:id?', function (req, res) {
    console.log(req.params);
    res.render('login', {redirect: req.query.redirect});
  });

  app.post('/login', 
    passport.authenticate('local', { failureRedirect: '/login' }), function(req, res, next) {
      return res.redirect('/');  
  });
  
};
