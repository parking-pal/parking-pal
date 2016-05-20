var models = require('../models');

var middleware = require('../lib/middleware');

  module.exports = function(app) {
  app.get('/commuter', function (req, res) {
    var data = { user: req.user}
    console.log("commuter_rental   app.get('/commuter'", data);
    res.render('commuter', data);
  });

  app.get('/commuter/rent/:parking_id', middleware.ensureAuthenticated, function (req, res) {    
    models.ParkingSpot.findById(req.params.parking_id).then(function(spot) {
 //     var ps = new Date(spot.dataValues.availability).toDateString();
      spot.dataValues.availability = new Date(spot.dataValues.availability).toDateString();
      var data = { user: req.user, spot: spot };
      //   Thu Jun 16 2016 12:00:00 GMT-0700 (PDT)
  //    var ps2 = ps.split(' '); //getFullYear() + ' ' + ps.getMonth() + ' ' + ps.getDay();
  //    var ps3 = ps2[0] + ' ' + ps2[1] + ' ' + ps2[2] + ' ' + ps2[3]; 
      console.log("commuter_rental   app.get('/commuter/rent/:parking_id'", spot.dataValues.availability);
      res.render('commuter_rental', data);    
    }).catch(function(error){
//      console.log("ERROR***   commuter_rental   app.get('/commuter/rent/:parking_id'", data);
      console.log(JSON.stringify(error));
    });
  });

  app.post('/commuter/rent/:parking_id', function(req, res) {
    models.ParkingSpot.findById(req.params.parking_id).then(function(spot) {
      var rental = models.Rental.create({
        UserId: req.user.id,
        ParkingSpotId: spot.dataValues.id,
        is_active: true
      });
      var data = { user: req.user, spot: spot };
      
      console.log("commuter_rental   app.post('/commuter/rent/:parking_id'", req.user.id, spot.dataValues.id);
      res.redirect('/');    
    });
  });
}

// lsof -n -i :3000 | grep LISTEN
// kill -9 16599
