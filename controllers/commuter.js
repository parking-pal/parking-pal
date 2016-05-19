var models = require('../models');
<<<<<<< HEAD

var middleware = require('../lib/middleware');
=======
var middleware = require('../lib/middleware');

>>>>>>> master

module.exports = function(app) {
  app.get('/commuter', function (req, res) {
    var data = { user: req.user}
    console.log("commuter_rental   app.get('/commuter'", data);
    res.render('commuter', data);
  });

  app.get('/commuter/rent/:parking_id', middleware.ensureAuthenticated, function (req, res) {    
    models.ParkingSpot.findById(req.params.parking_id).then(function(spot) {
      var data = { user: req.user, spot: spot };
      console.log("commuter_rental   app.get('/commuter/rent/:parking_id'", data);
      res.render('commuter_rental', data);    
    }).catch(function(error){
      console.log("ERROR***   commuter_rental   app.get('/commuter/rent/:parking_id'", data);
      console.log(JSON.stringify(error));
    });

  });

  app.post('/commuter/rent/:parking_id', function(req, res) {
    models.ParkingSpot.findById(req.params.parking_id).then(function(spot) {
      var data = { user: req.user, spot: spot };
      console.log("commuter_rental   app.post('/commuter/rent/:parking_id'", data);
      res.redirect('/');    
    });
  });
}

// lsof -n -i :3000 | grep LISTEN
// kill -9 16599
