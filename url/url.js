
var url = require('url');
var path = require('path');
// var http = 'https://www.host.com:8080/path?query=string#hash';

// console.log(url.parse(http));

// Url {
//     protocol: 'https:',
//     slashes: true,
//     auth: null,
//     host: 'www.host.com:8080',
//     port: '8080',
//     hostname: 'www.host.com',
//     hash: '#hash',
//     search: '?query=string',
//     query: 'query=string',
//     pathname: '/path',
//     path: '/path?query=string',
//     href: 'https://www.host.com:8080/path?query=string#hash'
// }

// var ur = url.format({
//     protocol: 'http:',
//     host: 'www.example.com',
//     pathname: '/p/a/t/h',
//     hash: '#hash',
//     search: 'query=string'
// });

// console.log(ur);

// 'http://www.example.com/p/a/t/h?query=string#hash'



//  path

// var cache = {};
// // path.normalize
// function store(key, value) {
//     cache[path.normalize[key]] = value;
// }
// store('foo/bar', 1);
// store('for//baz//bar', 2);
// console.log(path.normalize('for//baz////bar').replace(/\\/g, '/'));


// function travel(dir, callback, finish) {
//     fs.readdir(dir, function (err, files) {
//         (function next(i) {
//             if (i < files.length) {
//                 var pathname = path.join(dir, files[i]);
//                 fs.stat(pathname, function (err, stats) {
//                     if (stats.isDirectory()) {
//                         travel(pathname, callback, function () {
//                             next(i + 1);
//                         });
//                     } else {
//                         callback(pathname, function () {
//                             next(i + 1);
//                         });
//                     }
//                 });
//             } else {
//                 finish && finish ();
//             }
//         }(0));
//     });
// }

