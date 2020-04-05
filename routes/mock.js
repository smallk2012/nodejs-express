var express = require('express');
var bodyParser = require('body-parser');/*post方法*/
var router = express.Router();
//mysql连接池配置文件
var mysql = require('../api/mysql');

var app = express();
app.use(bodyParser.json());// 添加json解析
app.use(bodyParser.urlencoded({ extended: false }));

router.post('/', function (req, res, next) {
    //post  req.body.id
    mysql.select(['name'], 'mock', { pid: 21 }).then(result => {
        res.json(result);
    });
});
router.get('/wx/:id', function (req, res, next) {
    //post  req.body.id
    mysql.select(['name'], 'mock', { pid: req.params.id }).then(result => {
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
    console.log(req.body.id)
    mysql.select(['name'], 'mock', { pid: req.body.id }).then(result => {
        res.json(result);
    });
});
module.exports = router;
