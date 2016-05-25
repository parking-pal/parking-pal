var models = require('../models');
var middleware = require('../lib/middleware');
module.exports = function(app) {

    app.get('/homeowner', function (req, res) {
      var data = { user: req.user}
      console.log("homeowner.js  app.get('/homeowner'", data);
      res.render('homeowner', data);
  });

  app.post('/homeowner', middleware.ensureAuthenticated, function(req, res) {
    var data = { user: req.user}
    var user_id = data.user.id;
//    console.log("homeowner.js  app.post('/homeowner' 1", req.body, user_id);
    var avail = req.body.availability + ' 12:00:00.000 +00:00';
    console.log("homeowner.js  app.post('/homeowner' 2", req.body);
    var parkingSpot = models.ParkingSpot.create({
      address: req.body.address,
      availability: avail,
      rental_length: req.body.rental_length,
      rental_price: req.body.rental_price,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      start_time: req.body.start_time,
      end_time: req.body.end_time,
      UserId: user_id,
      cancelled: false
    }).then (function(parkingSpot) {
      return res.redirect('/dashboard');
    });  
  });
}  

