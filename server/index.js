var express = require('express');
var path = require('path');

var app = express();

app.use('/static', express.static('.build'));

app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname, '../static/index.html'));
});

var server = app.listen(3000, function () {

  console.log('Server listening at port 3000');
});

module.exports = server;
