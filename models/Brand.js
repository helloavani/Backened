var mongoose = require('mongoose');
var Schema = mongoose.Schema;

 
// Thanks to http://blog.matoski.com/articles/jwt-express-node-mongoose/
 
// set up a mongoose model
var BrandSchema = new Schema({
name : {
	type: String,
	unique: true,
	required:true,
	},
category:{
	type : String,
	required : true
}

}, { timestamps: true });



 
module.exports = mongoose.model('Brand', BrandSchema);
