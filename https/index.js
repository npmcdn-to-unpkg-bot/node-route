
var https = require('https');
var http = require('http');

var img_url = 'https://www.baidu.com';
// var img_url = 'https://jwzx.cqupt.congm.in/showstupic.php?xh=2015211878';

http.createServer(function (req, res) {
    https.get(img_url, function (response) {

        var value = '';
        response.on('data', function (chunk) {
            value += chunk;
        });

        response.on('end', function () {
            res.write(value);
            res.end();
        })
    })
}).listen(1234);


