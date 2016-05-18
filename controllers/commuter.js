var models = require('../models');

module.exports = function(app) {
  app.get('/commuter', function (req, res) {
    var data = { user: req.user}
    res.render('commuter', data);
  });

  app.get('/commuter/rent/:parking_id', ensureAuthenticated, function (req, res) {    
    models.ParkingSpot.findById(req.params.parking_id).then(function(spot) {
      var data = { user: req.user, spot: spot };
      console.log(data);
      res.render('commuter_rental', data);    
    }).catch(function(error){
      console.log(JSON.stringify(error));
    });

  });

// Simple route middleware to ensure user is authenticated.
    function ensureAuthenticated(req, res, next) {
      if (req.isAuthenticated()) { return next(); }
      req.session.redirectUrl = req.url
      req.session.error = 'Please sign in!';
      res.redirect('/login');
    }
}