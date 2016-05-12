module.exports = function(app) {
    app.get('/homeowner', function (req, res) {
      res.render('homeowner');
  });
}