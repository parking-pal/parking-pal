var express = require('express');
var exphbs  = require('express-handlebars');
var pg = require('pg');

var app = express();
var bodyParser = require('body-parser');
var models = require('./models');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use('/public', express.static(__dirname + '/public'));

require('./controllers/home')(app);
require('./controllers/commuter')(app);
require('./controllers/homeowner')(app);
require('./controllers/payments')(app);
require('./controllers/api')(app);


models.sequelize.sync().then(function () {
  console.log('Listening on port 3000');
  app.listen(3000);  

});

// to connect to the database from the terminal
// psql -h localhost -U postgres -d parkingpal


// sequelize model:create --name users --attributes first_name:string,last_name:string,email:string,phone:string
// sequelize model:create --name rentals --attributes first_name:string,last_name:string,email:string,phone:string
// sequelize model:create --name parking-spots --attributes first_name:string,last_name:string,email:string,phone:string
