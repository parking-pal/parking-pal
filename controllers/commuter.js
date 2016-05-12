module.exports = function(app) {
    app.get('/commuter', function (req, res) {
      res.render('commuter');
  });
}