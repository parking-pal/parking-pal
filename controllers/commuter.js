var models = require('../models');

module.exports = function(app) {
  app.get('/commuter', function (req, res) {
    res.render('commuter');
  });

  app.get('/commuter/rent/:parking_id', function (req, res) {    
    models.ParkingSpot.findById(req.params.parking_id).then(function(spot) {
      var data = { user: req.user, spot: spot };
      console.log(data);
      res.render('commuter_rental', data);    
    }).catch(function(error){
      console.log(JSON.stringify(error));
    });


  });

}