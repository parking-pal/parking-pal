var models = require('../models');

module.exports = function(app) {
  app.get('/sign-up', function (req, res) {
//    console.log("****app.get******");
    res.render('sign-up', {redirect: req.query.redirect})
  });

  app.post('/sign-up', function(req, res) {
    console.log(req.body);
    var user = models.User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      phone: req.body.phone,
      password: req.body.password
    
    }).then (function(user) {
    console.log(user);
    req.login(user, function(err){
       if (req.session.redirectUrl) {
         res.redirect(req.session.redirectUrl);
         req.session.redirectUrl = null
         return 
       }
      else
        return res.redirect('/');  
      });  
          
    }).catch(function(err) {
      console.log(err);
      res.send('BAAAADDDDDDD:   G-' + err.message);
    });

  });
}