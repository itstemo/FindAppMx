var express = require('express');
var app = express();

var indexPage = '/realIndex.html'; // This can not be index.html because that one would be catched by the '/' rule below

app.use(express.bodyParser());

app.all('/', function(req, res) {
  // Translating the signed_request parameter from POST to GET. This is not required for the FB JS SDK, but it helps detecting if you are inside a FB Canvas
  if (req.body && req.body['signed_request']) {
    res.redirect(indexPage + '?signed_request=' + req.body['signed_request']);
  }
  else {
    res.redirect(indexPage);
  }
});

app.listen();
