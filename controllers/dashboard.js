var models = require('../models');
var middleware = require('../lib/middleware');

module.exports = function(app) {
  app.get('/dashboard', middleware.ensureAuthenticated, function(req, res){
    var data = { user: req.user } 
      models.ParkingSpot.findAll({ where: { UserId: req.user.id }}).then(function(spots) {
        data.parkingSpots = spots;
        spots.forEach(function(spot) {
          spot.dataValues.availability = new Date(spot.dataValues.availability).toDateString();
        })
 
      models.Rental.findAll({ include: [{ model: models.ParkingSpot }], where: {UserId: req.user.id}}).then(function(rentals){
        rentals.forEach(function(rental) {
          rental.ParkingSpot.dataValues.availability = new Date(rental.ParkingSpot.dataValues.availability).toDateString();
        })
        data.Rental = rentals;
        res.render('dashboard', data);
      });
    }).catch(function(error){
      console.log(JSON.stringify(error));
    });
  });
}