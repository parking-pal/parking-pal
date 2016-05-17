var User = require('../models/index').User;

module.exports = function(app) {
  app.get('/sign-up', function (req, res) {
    res.render('sign-up', {redirect: req.query.redirect})
  });

  app.post('/register', function(req, res) {
    var user = new User({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      phone: req.body.phone,
     //  ?  password: req.body.password

    });

    user.save(function() {
      req.login(user, function(err) {
        return res.redirect('/admin');  // psuedo code

      })
    });

    //req.body()
  });

  //app.logout
}