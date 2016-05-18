var models = require('../models');

module.exports = function(app) {

    app.get('/homeowner', function (req, res) {
      var data = { user: req.user}
      console.log("homeowner.js  app.get('/homeowner'", data);
      res.render('homeowner', data);
  });

  app.post('/homeowner', ensureAuthenticated, function(req, res) {
    var data = { user: req.user}
    res.render('homeowner', data);
    console.log(req.body);
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
  
// Simple route middleware to ensure user is authenticated.
    function ensureAuthenticated(req, res, next) {
      if (req.isAuthenticated()) { return next(); }
      req.session.redirectUrl = req.url
      req.session.error = 'Please sign in!';
      res.redirect('/login');
    }
}

