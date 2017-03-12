var express = require('express');
// 引入外部模块
var utility = require('utility');

var router = express.Router();

/* GET users listing. */
router.get("/:name", function (req, res, next) {
    res.send("hello, "+req.params.name)
});
router.get("/", function (req, res, next) {
    var queryParam = req.query.carl;
    res.send("Hello my req.query is: "+ utility.sha256(queryParam));
});
module.exports = router;
