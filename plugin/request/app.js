
var fs      = require('fs');
var request = require('request');

var img_url = 'http://www.snh48.com/images/member/zp_1.jpg';



request
  .get(img_url)
  .on('response', function(response) {
    console.log(response.statusCode) // 200 
    console.log(response.headers['content-type']) // 'image/png' 
  })
  .pipe(fs.createWriteStream('doodle.png'));


