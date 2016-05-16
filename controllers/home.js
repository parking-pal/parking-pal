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
    models.User.findAll().then(function(rows) {
      var data = { users: rows };

      res.render('home', data);
    }).catch(function(error){
      console.log(JSON.stringify(error));
    });


  });

}

