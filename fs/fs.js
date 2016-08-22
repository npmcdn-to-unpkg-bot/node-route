
var fs = require('fs');
//var util = require('util'); // ========= 没啥卵用

// fs.stat('../plugin.md', function(err, stats) {
//     if (err) {
//         console.log('err ' + err);
//     } else {
//         console.log(stats);    //=> 一个样子
//         // console.log(util.inspect(stats));   //=> 一个样子
//     }
// });
// =>
// {
//     dev: -804827945,
//     mode: 33206,
//     nlink: 1,
//     uid: 0,
//     gid: 0,
//     rdev: 0,
//     blksize: undefined,
//     ino: 1407374883661276,
//     size: 504,
//     blocks: undefined,
//     atime: Mon Aug 22 2016 11: 00: 45 GMT + 0800(中国标准时间),
//     mtime: Mon Aug 22 2016 11: 13: 01 GMT + 0800(中国标准时间),
//     ctime: Mon Aug 22 2016 11: 13: 01 GMT + 0800(中国标准时间),
//     birthtime: Mon Aug 22 2016 11: 00: 45 GMT + 0800(中国标准时间)
// }

// fs.exists('../plugin.md', function (exists) {
//     if (exists) {
//         console.log('exists');
//     } else {
//         console.log ('no such a file');
//     }
// });

// fs.readFile('../plugin.md', function (err, data) {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(data.length);   // Buffer
// 	}
// });

// fs.readdir('../', function (err, data) {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(data);   // 数组 文件和 文件夹
// 	}
// });

// fs.mkdir('./mkdiar');



