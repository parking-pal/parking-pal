var express = require('express');
var exphbs  = require('express-handlebars');
var pg = require('pg');

var app = express();
var bodyParser = require('body-parser');
var models = require('./models');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use('/public', express.static(__dirname + '/public'));

models.sequelize.sync().then(function () {
  console.log('Listening on port 3000');
  app.listen(3000);
});

// to connect to the database from the terminal
// psql -h localhost -U postgres -d parkingpal
// sequelize model:create --name users --attributes first_name:string,last_name:string,email:string,phone:string
// sequelize model:create --name rentals --attributes first_name:string,last_name:string,email:string,phone:string
// sequelize model:create --name parking-spots --attributes first_name:string,last_name:string,email:string,phone:string
var passport = require('passport'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    User = require('./models/index').User;

var LocalStrategy = require('passport-local').Strategy;

app.use(require('connect-multiparty')());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(session({ secret: 'super-secret' }));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

passport.use(new LocalStrategy(
  {
    usernameField: 'email',
    session: false
  },
  function(username, password, done) {
    User.findOne({
      where: {
        email: username.toLowerCase()
      }
    })
    .then(
      function(user) {
        if(!user) return done(null, false);
        if(user.password != password) return done(null, false);

        // if (!user.decryptPassword(password)) return done(null, false);
        return done(null, user);
      },
      function(err) {
        return done(err);
      }
    )
  }
));

require('./controllers/home')(app);
require('./controllers/commuter')(app);
require('./controllers/homeowner')(app);
require('./controllers/payments')(app);
require('./controllers/api')(app);
require('./controllers/login')(app);
require('./controllers/sign-up')(app);
require('./controllers/logout')(app);
require('./controllers/dashboard')(app);