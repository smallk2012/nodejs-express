var express = require('express');
var router = express.Router();
//mysql连接池配置文件
var mysql = require('../api/mysql');

router.get('/', function (req, res, next) {
    //post  req.body.id
    mysql.select(['name'], 'mock', { pid: req.query.id }).then(result => {
        res.json(result);
    });
});
router.get('/wxcode', function (req, res, next) {
    //post  req.body.id
    mysql.select(['name'], 'mock', { pid: req.query.id }).then(result => {
        res.json(result);
    });
});
router.post('/add', function (req, res, next) {
    //post  req.body.id
    mysql.select(['name'], 'mock', { pid: 21 }).then(result => {
        res.json(result);
    });
});
module.exports = router;
