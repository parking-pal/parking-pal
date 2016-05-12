var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use('/public', express.static(__dirname + '/public'));

require('./controllers/home')(app);
require('./controllers/commuter')(app);
require('./controllers/homeowner')(app);
require('./controllers/payments')(app);

console.log('Listening on port 3000');
app.listen(3000);