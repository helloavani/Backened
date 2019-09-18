var mongoose = require('mongoose');
var Schema = mongoose.Schema;

 
// Thanks to http://blog.matoski.com/articles/jwt-express-node-mongoose/
 
// set up a mongoose model
var ProductSchema = new Schema({
vendorID : {
	type: String,
	
	},
productname : {
	type: String,
	
	
},
category : {
	type: String,
	
},
subcategory : {
        type: String,
        
      
    },
 quantity :{
	type: String,
    
        
},
brand : {
	type:String,
},
	   
model : {
	type:String
},
description : {
	type:String
},
bestfor : {
	type: String
},
whatitincludes: {
	type:String
},
renttype: {
	type:String
},
onedayrent : {
	type:String
},
threedayrent : {
	type:String
},
sevendayrent: {
	type:String
},
similar_prod:{
	type:Array
},

 
}, { timestamps: true });



 
module.exports = mongoose.model('Product', ProductSchema);
