var express = require('express');
var router = express.Router();
const wechatApi = require('../wechat/api');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/get_token', (req, res, next) => {
  res.send({wechat: wechatApi}, '==========');
})

module.exports = router;
