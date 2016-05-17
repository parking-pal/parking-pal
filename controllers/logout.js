//logs user out of site, deleting them from the session, and returns to homepage

module.exports = function(app) {
    app.get('/logout', function(req, res){
    var name = req.user.first_name;
    console.log("LOGGING OUT " + req.user.first_name)
    req.logout();
    res.redirect('/');
    req.session.notice = "You have successfully been logged out " + name + "!";
  });
}