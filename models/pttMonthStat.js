var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var pttMonthStatSchema = new Schema({
	word:{
		type:String
	},
	number:{
		type:Number
	},
});

module.exports=mongoose.model('PttMonthStat',pttMonthStatSchema);