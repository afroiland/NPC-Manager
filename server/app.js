
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var pgConnection = require('./modules/pg-connection');
var npcs = require('./routes/npcs');
var addnpc = require('./routes/addnpc');
//var random = require('./routes/random');
var combat = require('./routes/combat')
var app = express();

const LOCALPORT = 3000;
var portDecision = process.env.PORT || LOCALPORT;

app.use(express.static('public'));

// app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/views/index.html'));
});

app.use('/npcs', npcs);
app.use('/addnpc', addnpc);
//app.use('/random', random);
app.use('/combat', combat);

pgConnection.connect();

app.listen(portDecision, function() {
  console.log("Listening on port ", portDecision);
});
