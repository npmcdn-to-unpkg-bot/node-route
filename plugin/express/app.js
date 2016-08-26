
//  hello world
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
  // res.
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});











function b (tx, tax) {
    var n = 5;
    var res = 0;
    res = (n*tx - 15*tax) / (n*55 - 225);
    console.log('b: ' + res)
    return res;
}

function a (tx, tax) {
    var r = 0;

    // r = (tax - b(tx, tax) * 15) / 5;
    r = tx/5 - b (tx, tax) * 3;
    console.log('a: '+ r);
    return r;
}

a(tx, tax);

