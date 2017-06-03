var express = require('express');
var router = express.Router();
var pttStat = require('../models/pttStat');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/ptt', function(req, res, next) {
  res.render('ptt', { title: 'Express' });
});

router.get('/pttStat',function(req,res,next){
	pttStat.find(function(err, stats){
		res.json(stats);
	});
});

router.get('/postOne',function(res,res,next){
	var newStat = new pttStat();
	newStat.word = 'hello';
	newStat.number = 12;
	newStat.save(function(err,stat){
	    if(err){
	      console.log('無法存入');
	      return;
	    }
	    console.log(stat);
	    console.log('成功存入');
	 });
});

module.exports = router;
