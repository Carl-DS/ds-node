/**
 * Created by Carl on 2017/3/26.
 */
var express = require('express');
var async = require('async');

var router = express.Router();

router.get("/", function (req, res, next) {
    // 并发连接数的计数器
    var concurrencyCount = 0;
    var fetchUrl = function (url, callback) {
        // delay 的值在200以内, 是个随机的整数
        var delay = parseInt((Math.random() * 10000000) % 200, 10);
        concurrencyCount++;
        console.log('现在的并发数是', concurrencyCount, ', 正在抓取的是', url, ', 耗时' + delay + '毫秒');
        setTimeout(function () {
            concurrencyCount--;
            callback(null, url + ' html content');
            
        }, delay);
    };
    // 伪造一组链接
    var urls = [];
    for (var i = 0; i < 30; i++) {
        urls.push('http://datasource_' + i);
    }
    console.log(urls);

    // 5 表示并发链接数控制在5个
    async.mapLimit(urls, 5, function(url, callback){
        fetchUrl(url, callback)
    },function(err, result){
        console.log('final: ');
        console.log(result);
    });

    res.send("Hello async!");
});

module.exports = router;