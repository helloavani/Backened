var mongoose = require('mongoose');
var Schema = mongoose.Schema;

 
// Thanks to http://blog.matoski.com/articles/jwt-express-node-mongoose/
 
// set up a mongoose model
var OrderSchema = new Schema({
productID : {
	type: String,
	
	},
	vendorID : {
	type: String,
	
	},
productname : {
	type: String,
	
	
},
dateofdelivery : {
	type: String,
	
},
duration : {
        type: String,
        
      
    },
 price :{
	type: String,
    
        
},
advanceamount : {
	type:String,
},
	   
userID : {
	type:String
},
comments : {
	type:String
},
status : {
	type:String
},
renttype : {
	type:String
},

 
}, { timestamps: true });



 
module.exports = mongoose.model('Order', OrderSchema);
