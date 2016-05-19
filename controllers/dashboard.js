var models = require('../models');
var middleware = require('../lib/middleware');

module.exports = function(app) {
  app.get('/dashboard', middleware.ensureAuthenticated, function(req, res){
    models.ParkingSpot.findAll({ where: {UserId: req.user.id}}).then(function(rows) {
      var data = { user: req.user, parkingSpots: rows}
      console.log(data);
      res.render('dashboard', data);
    }).catch(function(error){
      console.log(JSON.stringify(error));
    });


  });
}

