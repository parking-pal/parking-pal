var models = require('../models');
var middleware = require('../lib/middleware');

module.exports = function(app) {
  app.get('/dashboard', middleware.ensureAuthenticated, function(req, res){
    models.ParkingSpot.findAll({ where: {UserId: req.user.id}}).then(function(spots) {
      var ps = spots.dataValues;//.availability;
   //   spots.forEach()
   //   spot.dataValues.availability = new Date(spot.dataValues.availability).toDateString();
      // TODO: get the spots.availability value.
      var data = { user: req.user, parkingSpots: spots};
      console.log("dashboard.js  app.get('/dashboard'", ps);
      res.render('dashboard', data);
    }).catch(function(error){
      console.log(JSON.stringify(error));
    });


  });
}

