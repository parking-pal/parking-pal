module.exports = function(app) {
  app.get('/', function (req, res) {
    if (req.query.action == 'commuter'){
      return res.redirect('/commuter');
    }
    else if (req.query.action == 'homeowner'){
      return res.redirect('/homeowner');
    }
    else if (req.query.action == 'payments'){
      return res.redirect('/payments');
    }
    console.log(req.query);
      var data = {};
      res.render('home', data);
  });
}