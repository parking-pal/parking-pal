var models = require('../models');

module.exports = function(app) {
  app.get('/sign-up', function (req, res) {
    res.render('sign-up', {redirect: req.query.redirect})
  });

  app.post('/sign-up', function(req, res) {
    console.log(req.body.password);
    var user = models.User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      phone: req.body.phone,
      password: req.body.password
    
    }).then (function(user) {
    console.log(user);
    req.login(user, function(err){
      return res.redirect('/');
      });  
    });
  });
}