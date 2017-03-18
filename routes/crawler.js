/**
 * Created by Carl on 2017/3/6.
 */
var express = require('express');
var superagent = require('superagent');
var cheerio = require('cheerio');

var router = express.Router();

router.get("/", function (req, res, next) {
    // 用superagent 去抓取http://cnodejs.org/ 的内容
    superagent.get('http://cnodejs.org/').end(function (err, sres) {
        // 常规的错误处理
        if (err) {
            return err;
        }
        // sres.text 里面存储着网页的html内容, 将它传给cheerio.load 之后
        // 就可以得到一个实现了jquery 接口的变量, 我们习惯性地将它命名为'$'
        var $ = cheerio.load(sres.text);
        var items = [];
        $('#topic_list .topic_title').each(function (idx, element) {
            var $element = $(element);
            items.push({
                title: $element.attr('title'),
                href: $element.attr('href')
            });
        });
        res.send(items);
    });
});

module.exports = router;