var models = require('../models');
var middleware = require('../lib/middleware');
module.exports = function(app) {

    app.get('/homeowner', function (req, res) {
      var data = { user: req.user}
//      console.log("homeowner.js  app.get('/homeowner'", data);
      res.render('homeowner', data);
  });

  app.post('/homeowner', middleware.ensureAuthenticated, function(req, res) {
    var data = { user: req.user}
    var user_id = data.user.id;
    res.render('homeowner', data);
//    console.log("homeowner.js  app.post('/homeowner' 1", req.body, user_id);
    var avail = req.body.availability + ' 12:00:00.000 +00:00';
//    console.log("homeowner.js  app.post('/homeowner' 2", data, data.user.id);
    var parkingSpot = models.ParkingSpot.create({
      address: req.body.address,
      availability: avail,
      rental_length: req.body.rental_length,
      rental_price: req.body.rental_price,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      start_time: req.body.start_time,
      end_time: req.body.end_time,
      UserId: user_id
    }).then (function(parkingSpot) {
 //   var data2 = { user: req.user.id, }
//    console.log(data2.id);
    // req.login(parkingSpot, function(err){
    //    if (req.session.redirectUrl) {
    //      res.redirect(req.session.redirectUrl);
    //      req.session.redirectUrl = null
    //      return 
    //    }
    //   else
    //     return res.redirect('/');  
    });
  });
}  

