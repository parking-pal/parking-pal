var models = require('../models');

module.exports = function(app) {
  app.get('/', function (req, res) {
    var data = { url: req.session.redirectUrl, query: req.query.action, user: req.user };

    console.log("home.js at the top app.get('/'", data);
    if (req.query.action == 'commuter'){
      return res.redirect('/commuter');
    }
    else if (req.query.action == 'homeowner'){
      return res.redirect('/homeowner');
    }
    else if (req.query.action == 'payments'){
      return res.redirect('/payments');
    }
    else if (req.query.action == 'user-redirect'){
      return res.redirect('/user-redirect');
    }
    else if (req.query.action == 'sign-up'){
      return res.redirect('/sign-up');
    }
    else if (req.query.action == 'login'){
      return res.redirect('/login');
    }
    else if (req.query.action == 'logout'){
      return res.redirect('/');
    }
     else if (req.query.action == 'dashboard'){
      return res.redirect('/dashboard');
    }
    models.User.findAll().then(function(rows) {
      var data = { user: req.user, sess: req.session, url: req.session.redirectUrl };

//      console.log("home.js", data.user);

      res.render('home', data);
    }).catch(function(error) {
      console.log(JSON.stringify(error));
    });


  });

}

