var models = require('../models');


module.exports = function(app) {

  app.get('/', function (req, res) {

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
    models.User.findAll().then(function(rows) {
      var data = { users: rows };
   //   console.log(data.users[1]);
      res.render('home', data);
    }).catch(function(error){
      console.log(JSON.stringify(error));
    });


  });

}

