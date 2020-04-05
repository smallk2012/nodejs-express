var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    var response = {status:1,data:'city'};
    res.send(JSON.stringify(response));
});

module.exports = router;
