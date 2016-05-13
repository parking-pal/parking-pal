module.exports = function(app) {
    app.post('/homeowner', function (req, res){
      console.log('daryls a dingo', req.body.homeowner);
      var data = {
        test: req.body.homeowner
      }
      res.render('homeowner', data);
    })
    app.get('/homeowner', function (req, res) {
      res.render('homeowner');
  });
}