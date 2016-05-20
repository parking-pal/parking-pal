var models = require('../models');


module.exports = function(app) {

  app.get('/api/parkingSpot', function (req, res) {

    models.ParkingSpot.findAll({
        include: [{ model: models.Rental }]
      }).then(function(spots) {
      res.json(spots);
    }).catch(function(error){
      console.log(JSON.stringify(error));
    });
  });

  app.get('/api/user', function (req, res) {
      models.User.findAll().then(function(users) {
      res.json(users);
    }).catch(function(error){
      console.log(JSON.stringify(error));
    });
  });

  app.get('/api/rentals', function (req, res) {
      models.Rental.findAll().then(function(rentals) {
      res.json(rentals);
    }).catch(function(error) {
      console.log(JSON.stringify(error));
    });
  });
}
