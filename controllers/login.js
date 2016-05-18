var passport = require('passport');

module.exports = function(app) {
  app.get('/login/:usertype?/:id?', function (req, res) {
    res.render('login');
  });

  app.post('/login', 
    passport.authenticate('local', { failureRedirect: '/login' }), function(req, res, next) {
      if (req.session.redirectUrl){
         res.redirect(req.session.redirectUrl);
         req.session.redirectUrl = null
         return 
       }
      else
        return res.redirect('/');  
  });
  
};
