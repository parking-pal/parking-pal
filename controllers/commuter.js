var models = require('../models');

var middleware = require('../lib/middleware');

  module.exports = function(app) {
  app.get('/commuter', function (req, res) {
    var data = { user: req.user}
    console.log("**commuter_rental   app.get('/commuter'", data);
    res.render('commuter', data);
  });

  app.get('/commuter/rent/:parking_id', middleware.ensureAuthenticated, function (req, res) {    
    models.ParkingSpot.findById(req.params.parking_id).then(function(spot) {
      var parkPrice = 0;
      if (spot.rental_length == 1) {
        parkPrice = spot.rental_price * 500;
      } else {
          parkPrice = spot.rental_price * 2000;
      }
      spot.dataValues.availability = new Date(spot.dataValues.availability).toDateString();
        var data = { user: req.user, spot: spot, parkPrice: parkPrice };
        res.render('commuter_rental', data);    
      }).catch(function(error){
        console.log(JSON.stringify(error));
      });
  });

  app.post('/commuter/rent/:parking_id', function(req, res) {
    models.ParkingSpot.findById(req.params.parking_id).then(function(spot) {
      var data = { user: req.user, spot: spot };      
      var rental = models.Rental.create({
        UserId: req.user.id,
        ParkingSpotId: spot.dataValues.id,
        is_active: true
      });
      res.redirect('/');    
    });
  });
}

// lsof -n -i :3000 | grep LISTEN
// kill -9 16599
