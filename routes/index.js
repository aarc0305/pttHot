var express = require('express');
var router = express.Router();
var pttStat = require('../models/pttStat');
var pttMonthStat = require('../models/pttMonthStat');
var pttYesterdayStat = require('../models/pttYesterdayStat');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/ptt', function(req, res, next) {
    pttStat.find({}).sort({number: -1}).limit(30).exec(function(err, dayStats) {
    	pttYesterdayStat.find({}).sort({number: -1}).limit(30).exec(function(err, yesStats) {
    		res.render('ptt', { 
    			dayStats: dayStats, 
    			yesStats:yesStats
    		});
    	});
		
	});
});

router.get('/pttStat',function(req,res,next){
	pttStat.find({}).sort({number: -1}).limit(30).exec(function(err, stats) {
		res.json(stats);
	});
	
});

router.get('/pttStatYesterday',function(req,res,next){
	pttYesterdayStat.find({}).sort({number: -1}).limit(30).exec(function(err, stats) {
		res.json(stats);
	});
	
});



router.get('/postOne',function(res,res,next){
	var newStat = new pttStat();
	newStat.word = 'helloPtt';
	newStat.number = 11;
	newStat.save(function(err,stat){
	    if(err){
	      console.log('無法存入');
	      return;
	    }
	    console.log(stat);
	    console.log('成功存入');
	 });
});

router.get('/postChinese',function(res,res,next){
        var newStat = new pttStat();
        newStat.word = '歡迎';
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
