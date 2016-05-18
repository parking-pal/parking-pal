var models = require('../models');


module.exports = function(app) {

  app.get('/api/parkingSpot', function (req, res) {

    models.ParkingSpot.findAll().then(function(rows) {
      res.json(rows);
    }).catch(function(error){
      console.log(JSON.stringify(error));
    });
  });

  app.get('/api/user', function (req, res) {
      models.User.findAll().then(function(rows) {
      res.json(rows);
    }).catch(function(error){
      console.log(JSON.stringify(error));
    });
  });

}
