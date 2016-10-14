// Modules
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var bodyParser = require('body-parser');

// Set server port
var port = process.env.PORT || 7878;

// Parse application/json
app.use(bodyParser.json());

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Serve up static assests
app.use(express.static(__dirname + '/public'));

// Set pug as view engine
app.set('view engine', 'pug');
app.set('views', __dirname + '/public/views');

// Routes
require('./app/routes')(app);

// IO
require('./app/io')(io);

// Start app
var server = http.listen(port, function(){
  console.log("Server running on http://localhost:" + port);
});

// Expose app
exports = module.exports = app;
