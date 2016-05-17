module.exports = function(app) {
app.get('/sign-up', function (req, res) {
    res.render('sign-up', {redirect: req.query.redirect})
  });
}