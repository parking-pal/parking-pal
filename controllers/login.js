module.exports = function(app) {
      app.get('/login', function (req, res) {
      res.render('login', {redirect: req.query.redirect});
  });
      app.post('/login', function (req, res) {

        // TODO: Login

        res.redirect(req.body.redirect);
      })
}
