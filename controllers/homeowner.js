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
    res.render('homeowner', data);
    console.log("homeowner.js  app.post('/homeowner'", req.body);
    var parkingSpot = models.ParkingSpot.create({
      address: req.body.address,
      availability_date: req.body.availability_date,
      rental_length: req.body.rental_length,
      rental_price: req.body.rental_price,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      user_id: data.id,
      start_time: req.body.start_time,
      end_time: req.body.end_time
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

