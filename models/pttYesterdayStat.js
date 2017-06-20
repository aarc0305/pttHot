var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var pttStatSchema = new Schema({
	word:{
		type:String
	},
	number:{
		type:Number
	},
});

module.exports=mongoose.model('PttYesterdayStat',pttStatSchema);