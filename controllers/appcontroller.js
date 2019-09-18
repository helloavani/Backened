const passport = require('passport');
const jwt1 = require('express-jwt');
const { validationResult } = require('express-validator/check');
var config   = require('../config/database');
const User = require('../models/User');
const Product = require('../models/Product');
const Order = require('../models/Order');
const Category = require('../models/Category');
const Brand = require('../models/Brand');
var jwt         = require('jwt-simple');
var ObjectID = require("mongodb").ObjectID;




// Error handling
const sendError = (err, res) => {
  response.status = 501;
  response.message = typeof err == 'object' ? err.message : err;
  res.status(501).json(response);
};

// Response handling
let response = {
  status: 200,
  data: [],
  message: null
};

exports.signup = function(req, res,)  {
  // console.log(req.body);
 //res.json('its working');
  if (!req.body.email || !req.body.password) {
    res.json({success: false, msg: 'Please pass Email and password.'});
  } else {
    var newUser = new User({
   firstname : req.body.name,  
   email : req.body.email, 
   phone : req.body.mno,
   password: req.body.password,
  //roles : req.body.roles,
  //lastname : req.body.la stname,
 // address : req.body.address
    });
 //    save the user
   newUser.save(function(err,result) {
     console.log(result);
     //console.log(res);
      if (err) {
        return res.send({success: false, msg: 'Username already exists.'});
  }
      res.send({success: true, msg: 'Successful created new user.'});
    });
  };

};
exports.newuser = function(req, res) {
  var token = getToken(req.headers);
  if (token) {
    var decoded = jwt.decode(token, config.secret);
    User.findOne({
      email: decoded.email
    }, function(err, user) {
        if (err) throw err;
 
        if (!user) {
          return res.status(403).send({success: false, msg: 'Authentication failed. User not found.'});
        } else {
    if (!req.body.email || !req.body.password) {
    res.json({success: false, msg: 'Please pass email and password.'});
  }
  else if(user.roles=="admin")
    {
    
    var newUser = new User({
       password: req.body.password,
  roles : req.body.role,
  firstname : req.body.firstname,
  lastname : req.body.lastname,
  email : req.body.email,
  phone : req.body.phone,
  address : req.body.address
    });
 //    save the user
   newUser.save(function(err) {
      if (err) {
        return res.json({success: false, msg: "User Name exists"});
  }
      res.json({success: true, msg: 'Successful created new user.'});
    });
  
    }
    else if(user.roles=="user")
    {
    return res.status(403).send({success: false, msg: 'You are not allowed to add user'});
    }
      else if(user.roles=="distributor")
    {
    var newUser = new User({
      password: req.body.password,
  roles : req.body.roles,
  firstname : req.body.firstname,
  lastname : req.body.lastname,
  email : req.body.email,
  phone : req.body.phone,
  address : req.body.address
    });
 //    save the user
   newUser.save(function(err) {
      if (err) {
        return res.json({success: false, msg: 'Username already exists.'});
  }
      res.json({success: true, msg: 'Successful created new user.'});
    });
    }

         
        }
    });
  } else {
    return res.status(403).send({success: false, msg: 'No token provided.'});
  }
};


exports.edituser =  function(req, res) {
  var token = getToken(req.headers);
  if (token) {
    var decoded = jwt.decode(token, config.secret);
    User.findOne({
      email: decoded.email
    }, function(err, user) {
        if (err) throw err;
 
        if (!user) {
          return res.status(403).send({success: false, msg: 'Authentication failed. User not found.'});
        } else {
                //console.log(req.body.noti);
                User.findOne({ _id : req.body.id}, function (err, docs) {
        if(!err)
        {
  docs.email = req.body.email;
  docs.firstname = req.body.firstname;
  docs.lastname = req.body.lastname;
  docs.phone = req.body.phone;
  docs.address = req.body.address;
  docs.save(); 
        }
  });


                console.log("status changed");
        return res.send({success: true, msg: 'status changed'});
            }
    });
  } else {
    return res.status(403).send({success: false, msg: 'No token provided.'});
  }
};
exports.authenticateuser= function(req, res) {
  User.findOne({
    email: req.body.email
  }, function(err, user) {
    if (err) throw err;
 
    if (!user) {
      res.send({success: false, msg: 'Authentication failed. User not found.'});
    } else {
      // check if password matches
      user.comparePassword(req.body.password, function (err, isMatch) {
        if (isMatch && !err) {
            if(user.roles=="user")
    {        
    // if user is found and password is right create a token
          var token = jwt.encode(user, config.secret);
          // return the information including token as JSON
          res.json({success: true, token: 'JWT ' + token});
    }
    else{
    res.status(403).send({success: false, msg: 'You Are Not a Distributor'});       
    }
        } else {
          res.send({success: false, msg: 'Authentication failed. Wrong password.'});
        }
      });
    }
  });
};
exports.authenticatedist = function(req, res) {
  User.findOne({
    email: req.body.name
  }, function(err, user) {
    if (err) throw err;
 
    if (!user) {
      res.send({success: false, msg: 'Authentication failed. User not found.'});
    } else {
      // check if password matches
      user.comparePassword(req.body.password, function (err, isMatch) {
        if (isMatch && !err ) {
    if(user.roles=="distributor")
    {        
    // if user is found and password is right create a token
          var token = jwt.encode(user, config.secret);
          // return the information including token as JSON
          res.json({success: true, token: 'JWT ' + token});
    }
    else{
    res.status(403).send({success: false, msg: 'You Are Not a Distributor'});       
    }
        } else {
          res.status(403).send({success: false, msg: 'Authentication failed. Wrong password.'});
        }
      });
    }
  });
};
exports.authenticateadmin= function(req, res) {
  
  User.findOne({
    email: req.body.name
  }, function(err, user) {
    if (err) throw err;
 
    if (!user) {
      res.send({success: false, msg: 'Authentication failed. User not found.'});
    } else {
      // check if password matches
      user.comparePassword(req.body.password, function (err, isMatch) {
        if (isMatch && !err ) {
    if(user.roles=="admin")
    {        
    // if user is found and password is right create a token
          var token = jwt.encode(user, config.secret);
          // return the information including token as JSON
          res.json({success: true, token: 'JWT ' + token});
    }
    else{
    res.status(403).send({success: false, msg: 'You Are Not a Admin'});       
    }
        } else {
          res.status(403).send({success: false, msg: 'Authentication failed. Wrong password.'});
        }
      });
    }
  });
};


exports.siteSetting= function(req, res) {

var data1={
 fbId :"hello",
        address :"hello",
        email :"hello",
        latitude :"hello",
        longitude :"hello",
        phoneNo :"hello",
        pushNotificationSenderId :"hello",
        lazyLoadingGif :"hello",
        newProductDuration :"hello",
        notifText :"hello",
        notifTitle :"hello",
        notifDuration :"hello",
        currency :"hello",
        cartButton :"hello",
        footerShowHide :"hello",
       
        appName :"hello",
        homePage :"hello",
        categoryPage :"hello",
        siteUrl :"hello",
        introPage :"hello",
        myOrdersPage :"hello",
        newsPage :"hello",
        wishListPage :"hello",
        shippingAddressPage :"hello",
        aboutUsPage :"hello",
        contactUsPage :"hello",
        editProfilePage :"hello",
        packgeName :"hello",
        settingPage :"hello",
        admob :"hello",
        admobBannerid :"hello",
        admobIntid :"hello",
        googleAnalaytics :"hello",
        rateApp :"hello",
        shareApp :"hello",
        fbButton :"hello",
        googleButton :"hello",
        notificationType :"hello",
        onesignalAppId :"hello",
        onesignalSenderId :"hello",
        admobIos :"hello",
        admobBanneridIo:"hello",
        admobIntidIo:"hello",
}
var abc=[data1];
         var obj = {data : abc};
         res.json(obj);
};

exports.getallusers= function(req, res) {
  var token = getToken(req.headers);
  if (token) {
    var decoded = jwt.decode(token, config.secret);
    User.findOne({
      email: decoded.email
    }, function(err, user) {
        if (err) return res.satatus(403).send({err:err});
        
        if (!user) {
          return res.status(403).send({success: false, msg: 'Authentication failed. User not found.'});
        } else {
    if(user.roles=="admin"||user.roles=="distributor")
    {
    User.find({"roles":"user"},{'firstname':1,'lastname':1,'phone':1,'email':1,'address':1}, function (err, docs) {
  if(!err)
  res.json({UserList:docs});
  });
    }
    else 
    {
    
           res.send({success: false, msg: 'No token provided.'});
    
         }
        }
    });
  } else {
    return res.status(403).send({success: false, msg: 'No token provided.'});
  }
};
exports.getallvendors= function(req, res) {
  var token = getToken(req.headers);
  if (token) {
    var decoded = jwt.decode(token, config.secret);
    User.findOne({
      email: decoded.email
    }, function(err, user) {
        if (err) return res.satatus(403).send({err:err});
        
        if (!user) {
          return res.status(403).send({success: false, msg: 'Authentication failed. User not found.'});
        } else {
    if(user.roles=="admin")
    {
    User.find({"roles":"distributor"},{'firstname':1,'lastname':1,'phone':1,'email':1,'address':1}, function (err, docs) {
  if(!err)
  res.json({UserList:docs});
  });
    }
    else 
    {
    res.send({success: false, msg: 'No token provided.'});
    
         }
        }
    });
  } else {
    return res.status(403).send({success: false, msg: 'No token provided.'});
  }
};
// exports.upload = function(upload.single('productimage'),(req,res,next) =>{
//   console.log(req.file);
// });

exports.addproduct =  function(req, res ) {
  var token = getToken(req.headers);
  if (token) {
    var decoded = jwt.decode(token, config.secret);
    User.findOne({
      email: decoded.email
    }, function(err, user) {
        if (err) throw err;
 
        if (!user) {
          return res.status(403).send({success: false, msg: 'Authentication failed. User not found.'});
        } else {
    if(user.roles=="admin")
    {

     var newDevice = new Product({
  vendorID : req.body.vendorID,
  productname : req.body.productname,
  category : req.body.category,

  subcategory : req.body.subcategory,
  quantity : req.body.quantity,
  brand : req.body.brand,
  model : req.body.model,
  description: req.body.description,
  bestfor : req.body.bestfor,
  whatitincludes : req.body.whatitincludes,
renttype : req.body.renttype,
onedayrent : req.body.onedayrent,
threedayrent : req.body.threedayrent,
sevendayrent : req.body.sevendayrent
    });
    // save the user
    newDevice.save(function(err) {
      if (err) {
        return res.json({success: false, msg: err});
      }
      res.json({success: true, msg: 'Successful added new Product'});
    });
    
  
    }
    else if(user.roles=="user")
    {
    return res.status(403).send({success: false, msg: 'You are not allowed to add user'});
    }
      else if(user.roles=="distributor")
    {
    
   var newDevice = new Product({
    vendorID : user.email,
  productname : req.body.productname,
  category : req.body.category,

  subcategory : req.body.subcategory,
  quantity : req.body.quantity,
  brand : req.body.brand,
  model : req.body.model,
  description: req.body.description,
  bestfor : req.body.bestfor,
  whatitincludes : req.body.whatitincludes,
renttype : req.body.renttype,
onedayrent : req.body.onedayrent,
threedayrent : req.body.threedayrent,
sevendayrent : req.body.sevendayrent
    });
    // save the user
    newDevice.save(function(err) {
      if (err) {
        return res.json({success: false, msg: 'Duplicate Entries Found...'});
      }
      res.json({success: true, msg: 'Successful added new Product.'});
    });
    }

         
        }
   });
  } else {
    return res.status(403).send({success: false, msg: 'No token provided.'});
  }
};

exports.getallproducts= function(req, res) {
  var token = getToken(req.headers);
  if (token) {
    var decoded = jwt.decode(token, config.secret);
    User.findOne({
      email: decoded.email
    }, function(err, user) {
        if (err) throw err;
 
        if (!user) {
          return res.status(403).send({success: false, msg: 'Authentication failed. User not found.'});
        } else {
    
    if(user.roles=="admin")
    {
    Product.find({}, function (err, docs) {
  if(!err)
  res.json({ProductList:docs});
  });
    }
    else if(user.roles=="distributor")
    {
    Product.find({vendorID: user.email}, function (err, docs) {
  if(!err)
  res.json({ProductList:docs});
  });
    }   

         
        }
    });
  } else {
    return res.status(403).send({success: false, msg: 'No token provided.'});
  }
};
//version 2 getting products with their id's recieved from users

exports.getallproductsv2 = function(req,res){
//console.log(req.query);
  var token = getToken(req.headers);
  if(token){
    var decoded = jwt.decode(token,config.secret);
    User.findOne({
      email:decoded.email
    }, function(err,user){
      if(err) throw err;
      if(!user){
          return res.status(403).send({success: false, msg: 'Authentication failed. User not found.'});
        } else {
          Product.find({ _id : req.query.product_id} , function(err,docs){
            if(!err)

                res.json({ProductList2:docs});

          })
            }
          })




        }
      };
      exports.getsimilar_prod = function(req,res){
        console.log(req.query);
          var token = getToken(req.headers);
          if(token){
    var decoded = jwt.decode(token,config.secret);
    User.findOne({
      email:decoded.email
    }, function(err,user){
      if(err) throw err;
      if(!user){
          return res.status(403).send({success: false, msg: 'Authentication failed. User not found.'});
        } else {


          Product.find({_id:req.query.product_id } , function(err,docs){
            var result = docs;
           
                          
             Product.find({brand:result[0].brand,productname:result[0].productname})
             .limit(4)
             .exec(function(err,items){
               res.json({"items":items});
               console.log(items);
             })
               })
            }
          });
              }
            };

            exports.getsubcategory = function(req,res){
            console.log(req.query);
          var token = getToken(req.headers);
          if(token){
            var decoded = jwt.decode(token,config.secret);
            User.findOne({
              email:decoded.email
            }, function(err,user){
              if(err) throw err;
              if(!user){
                return res.status(403).send({success:false,msg:'Authentication failed. User not found.'});
              }else{
                Category.find({_id:req.query.product_id }, function(err,docs){
                  var result = docs;
                  Brand.find({category:result[0].name})
                  .exec(function(err,items){
                    res.json({"items":items});
                  })
               // res.json({result});
                })

              }
            })
            }
          }

          exports.getsubbrand = function(req,res){
            console.log(req.query);
          var token = getToken(req.headers);
          if(token){
            var decoded = jwt.decode(token,config.secret);
            User.findOne({
              email:decoded.email
            }, function(err,user){
              if(err) throw err;
              if(!user){
                return res.status(403).send({success:false,msg:'Authentication failed. User not found.'});
              }else{
                Brand.find({_id:req.query.product_id }, function(err,docs){
                  var result = docs;
                  Product.find({brand:result[0].name})
                  .exec(function(err,items){
                    res.json({"items":items});
                  })
               // res.json({result});
                })

              }
            })
            }
          }

          exports.recieveorders = function(req,res){
           console.log(req.query);
           var token = getToken(req.headers);
           if(token){
             var decoded = jwt.decode(token,config.secret);
             User.findOne({
               email:decoded.email
             }, function(err,user){
               if(err) throw err;
               if(!user){
                return res.status(403).send({success:false,msg:'Authentication failed. User not found.'});

               }else{
                 // console.log(user.cartitem);
                 // console.log(user);
                  let id = req.query.product_id;
                

                 //user.cartitem.push({product_id:req.query.product_id});
                 User.updateOne({_id:user._id},{$push:{cartitem:req.query.product_id}},function(err,abcd){

                     if(!err){
                   res.json({msg:'successfully orders recieved'});
                  // console.log(user.cartitem);
                 }
                 });
                 
               
               
               }
             })
           }



            
          }
          exports.getcartitems = function(req,res){
          console.log(req.query);
          var token = getToken(req.headers);
          if(token){
            var decoded = jwt.decode(token,config.secret);
            User.findOne({
              email:decoded.email
            }, function(err,user){
              if(err) throw err;
            if(!user){
              return res.status(403).send({success:false,msg:'Authentication failed.user not found'});
            }else{
             
           
                  Product.find({_id:{$in:user.cartitem}},function(err,result){
                    if(!err){
                      res.json(result);
                    }
                  });
                  // for(let i of item){

                  // }
                
              
            }

            })
          }


          }
           exports.deletecartitems = function(req,res){
             console.log(req.query);
             var cartitem_id = req.query.cartitem_id;
             console.log(cartitem_id);
             var token = getToken(req.headers);
             if(token){
               var decoded = jwt.decode(token,config.secret);
               User.findOne({
                 email:decoded.email

               },function(err,user){
                 if(err) throw err;
                 if(!user){
                   return res.status(403).send({success:false,msg:'authentication failed . user not found'});
                 }else{
                   user.updateOne(
                     {$pull:{cartitem:cartitem_id}}, function(err,value){
                       if(!err){
                         //console.log("removed");
                         res.json({msg:'successfully removed item'});
                       }

                     })
                  
                   // User.find({}, function(err,doc){
                   //   if(!err){
                   //     doc.cartitem.pull({_id:cartitemid} ,function(err,res){
                   //       if(!err){
                   //         res.json({msg:'deleted'});
                   //       }
                   //     });

                      

                   //   }
                   // })
                 }
               })
             }

           }
    

  






exports.editproduct = function(req, res) {
  var token = getToken(req.headers);
  if (token) {
    var decoded = jwt.decode(token, config.secret);
    User.findOne({
      name: decoded.name
    }, function(err, user) {
        if (err) throw err;
 
        if (!user) {
          return res.status(403).send({success: false, msg: 'Authentication failed. User not found.'});
        } else {
                //console.log(req.body.noti);
                Product.findOne({ _id : req.body._id}, function (err, docs) {
        if(!err&&docs)
        {
        docs.vendorID =req.body.vendorID;
  docs.productname = req.body.productname;
  docs.category = req.body.category;

  docs.subcategory = req.body.subcategory;
  docs.quantity = req.body.quantity;
  docs.brand = req.body.brand;
  docs.model = req.body.model;
  docs.description=req.body.description;
  docs.bestfor = req.body.bestfor;
  docs.whatitincludes = req.body.whatitincludes;
docs.renttype = req.body.renttype;
docs.onedayrent = req.body.onedayrent;
docs.threedayrent = req.body.threedayrent;
docs.sevendayrent = req.body.sevendayrent
  docs.save();
  
  }
        });


                console.log("device edited");
        return res.send({success: true, msg: 'device edited'});
            }
    });
  } else {
    return res.status(403).send({success: false, msg: 'No token provided.'});
  }
};
exports.placeorder =  function(req, res) {
  var token = getToken(req.headers);
  if (token) {
    var decoded = jwt.decode(token, config.secret);
    User.findOne({
      email: decoded.email
    }, function(err, user) {
        if (err) throw err;
 
        if (!user) {
          return res.status(403).send({success: false, msg: 'Authentication failed. User not found.'});
        } else {
    if(user.roles=="admin")
    {

     var newDevice = new Order({
  productID : req.body.productID,
  productname : req.body.productname,
  dateofdelivery : req.body.dateofdelivery,

  duration : req.body.duration,
  price : req.body.price,
  advanceamount : req.body.advanceamount,
  userID : req.body.userID,
  comments: req.body.comments,
  status : req.body.status,
  vendorID : req.body.vendorID,
renttype : req.body.renttype,

    });
    // save the user
    newDevice.save(function(err) {
      if (err) {
        return res.json({success: false, msg: err});
      }
      res.json({success: true, msg: 'Successful added new Order.'});
    });
    
  
    }
    else if(user.roles=="user")
    {
    return res.status(403).send({success: false, msg: 'You are not allowed to add user'});
    }
      else if(user.roles=="distributor")
    {
    
   var newDevice = new Order({
productID : req.body.productID,
  productname : req.body.productname,
  dateofdelivery : req.body.dateofdelivery,

  duration : req.body.duration,
  price : req.body.price,
  advanceamount : req.body.advanceamount,
  userID : req.body.userID,
  comments: req.body.comments,
  status : req.body.status,
  vendorID : user.email,
renttype : req.body.renttype,
    });
    // save the user
    newDevice.save(function(err) {
      if (err) {
        return res.json({success: false, msg: 'Duplicate Entries Found...'});
      }
      res.json({success: true, msg: 'Successful added new Order.'});
    });
    }

         
        }
    });
  } else {
    return res.status(403).send({success: false, msg: 'No token provided.'});
  }
};

exports.getallorders= function(req, res) {
  var token = getToken(req.headers);
  if (token) {
    var decoded = jwt.decode(token, config.secret);
    User.findOne({
      email: decoded.email
    }, function(err, user) {
        if (err) throw err;
 
        if (!user) {
          return res.status(403).send({success: false, msg: 'Authentication failed. User not found.'});
        } else {
    
    if(user.roles=="admin")
    {
    Order.find({}, function (err, docs) {
  if(!err)
  res.json({OrderList:docs});
  });
    }else if(user.roles=="user")
    {
    Order.find({userID : user.email}, function (err, docs) {
  if(!err&&user.status==1)
  res.json({OrderList:docs});
  });
    }
    else if(user.roles=="distributor")
    {
    Order.find({vendorID: user.email}, function (err, docs) {
  if(!err)
  res.json({OrderList:docs});
  });
    }   

         
        }
    });
  } else {
    return res.status(403).send({success: false, msg: 'No token provided.'});
  }
};
exports.editorder = function(req, res) {
  var token = getToken(req.headers);
  if (token) {
    var decoded = jwt.decode(token, config.secret);
    User.findOne({
      name: decoded.name
    }, function(err, user) {
        if (err) throw err;
 
        if (!user) {
          return res.status(403).send({success: false, msg: 'Authentication failed. User not found.'});
        } else {
                //console.log(req.body.noti);
                Order.findOne({ _id : req.body._id}, function (err, docs) {
        if(!err&&docs)
        {
        docs.vendorID =req.body.vendorID;
  docs.productname = req.body.productname;
  docs.productID = req.body.productID;

  docs.dateofdelivery = req.body.dateofdelivery;
  docs.duration = req.body.duration;
  docs.price = req.body.price;
  docs.advanceamount = req.body.advanceamount;
  docs.userID=req.body.userID;
  docs.comments = req.body.comments;
  docs.status = req.body.status;
docs.renttype = req.body.renttype;



  
  
  
  
  

  docs.save();
  
  }
        });


                console.log("device edited");
        return res.send({success: true, msg: 'device edited'});
            }
    });
  } else {
    return res.status(403).send({success: false, msg: 'No token provided.'});
  }
};
exports.addcategory =  function(req, res) {
  var token = getToken(req.headers);
  if (token) {
    var decoded = jwt.decode(token, config.secret);
    User.findOne({
      email: decoded.email
    }, function(err, user) {
        if (err) throw err;
 
        if (!user) {
          return res.status(403).send({success: false, msg: 'Authentication failed. User not found.'});
        } else {
    if(user.roles=="admin")
    {

     var newDevice = new Category({
  name : req.body.name
  
    });
    // save the user
    newDevice.save(function(err) {
      if (err) {
        return res.json({success: false, msg: err});
      }
      res.json({success: true, msg: 'Successful added'});
    });
    
  
    }
    else if(user.roles=="user")
    {
    return res.status(403).send({success: false, msg: 'You are not allowed to add '});
    }
      else if(user.roles=="distributor")
    {
     
     var newDevice = new Category({
  name : req.body.name
  
    });
    // save the user
    newDevice.save(function(err) {
      if (err) {
        return res.json({success: false, msg: err});
      }
      res.json({success: true, msg: 'Successful added'});
    });
    
    }

         
        }
    });
  } else {
    return res.status(403).send({success: false, msg: 'No token provided.'});
  }
};
exports.addbrand =  function(req, res) {
  var token = getToken(req.headers);
  if (token) {
    var decoded = jwt.decode(token, config.secret);
    User.findOne({
      email: decoded.email
    }, function(err, user) {
        if (err) throw err;
 
        if (!user) {
          return res.status(403).send({success: false, msg: 'Authentication failed. User not found.'});
        } else {
    if(user.roles=="admin")
    {

     var newDevice = new Brand({
  name : req.body.name,
  category:req.body.category
  
    });
    // save the user
    newDevice.save(function(err) {
      if (err) {
        return res.json({success: false, msg: err});
      }
      res.json({success: true, msg: 'Successful added'});
    });
    
  
    }
    else if(user.roles=="user")
    {
    return res.status(403).send({success: false, msg: 'You are not allowed to add '});
    }
      else if(user.roles=="distributor")
    {
  
     var newDevice = new Brand({
  name : req.body.name,
  category:req.body.category
  
    });
    // save the user
    newDevice.save(function(err) {
      if (err) {
        return res.json({success: false, msg: err});
      }
      res.json({success: true, msg: 'Successful added'});
    });
   
    }

         
        }
    });
  } else {
    return res.status(403).send({success: false, msg: 'No token provided.'});
  }
};
exports.getallcat= function(req, res) {
  var token = getToken(req.headers);
  if (token) {
    var decoded = jwt.decode(token, config.secret);
    User.findOne({
      email: decoded.email
    }, function(err, user) {
        if (err) throw err;
 
        if (!user) {
          return res.status(403).send({success: false, msg: 'Authentication failed. User not found.'});
        } else {
    
    
    
    Category.find({}, function (err, docs) {
  if(!err)
  res.json({CategoryList:docs});
  });
    
    

         
        }
    });
  } else {
    return res.status(403).send({success: false, msg: 'No token provided.'});
  }
};
exports.getallcatv2 = function(req,res){
  //var category_id=req.query.category_id;
  console.log(req.query);
   // var category_id= new ObjectID("5d52fefab7752f420859ad3b");

 // console.log(category_id);

  var token = getToken(req.headers);
  if(token){
    var decoded = jwt.decode(token, config.secret);
    User.findOne({
      email:decoded.email
    },function(err,user){

      if(err) throw err;
      if(!user){
        return res.status(403).send({success:false,msg:'Authentication failed. user not found'})
       }else{

         Category.findOne({_id : req.query.category_id} , function(err,item){
           if(!err){
            // res.json({item:item});
             Product.find({category:item.name}, function(err1,item1){
               if(!err){
                 res.json({item1});
               }
             });
           }

         });
      //   Category.aggregate(
      //    //  var id : any;
      //    // this. _id = req.body.category_id;
      //    // console.log(this._id);

      //      {
      //     $match :{_id:category_id}
      //   },
      //   {
      //     $lookup:{
      //       from:" Product  ",
      //       localField:"name ",
      //       foreignField:" category",
      //      as:" categorised_list "
      //     } 
      //  },
      //    function(err,data){
      //       if(err){
      //         res.json({status:"error"});
      //         throw err;
      //       }else{
      //         if(JSON.stringify(data).length > 0){
      //       console.log(JSON.stringify(data));
      //       res.json({data:data});
      //   }
      //   else{
      //       res.json({status: "Data is not Exist."});
      //       console.log("Data is not Exist.");
      //   }

      //       }

      //   });



      }

    });



  } else {
    return res.status(403).send({success: false, msg: 'No token provided.'});
  }
}







exports.getallbrands= function(req, res) {
  var token = getToken(req.headers);
  if (token) {
    var decoded = jwt.decode(token, config.secret);
    User.findOne({
      email: decoded.email
    }, function(err, user) {
        if (err) throw err;
 
        if (!user) {
          return res.status(403).send({success: false, msg: 'Authentication failed. User not found.'});
        } else {
    
    
    
    Brand.find({}, function (err, docs) {
  if(!err)
  res.json({BrandList:docs});
  });
    
    

         
        }
    });
  } else {
    return res.status(403).send({success: false, msg: 'No token provided.'});
  }
};
exports.editcategory = function(req, res) {
  var token = getToken(req.headers);
  if (token) {
    var decoded = jwt.decode(token, config.secret);
    User.findOne({
      name: decoded.name
    }, function(err, user) {
        if (err) throw err;
 
        if (!user) {
          return res.status(403).send({success: false, msg: 'Authentication failed. User not found.'});
        } else {
                //console.log(req.body.noti);
                Category.findOne({ _id : req.body._id}, function (err, docs) {
        if(!err&&docs)
        {
        docs.name =req.body.name;
  
  docs.save();
  
  }
        });


                console.log(" edited");
        return res.send({success: true, msg: ' edited'});
            }
    });
  } else {
    return res.status(403).send({success: false, msg: 'No token provided.'});
  }
};
exports.editbrand = function(req, res) {
  var token = getToken(req.headers);
  if (token) {
    var decoded = jwt.decode(token, config.secret);
    User.findOne({
      name: decoded.name
    }, function(err, user) {
        if (err) throw err;
 
        if (!user) {
          return res.status(403).send({success: false, msg: 'Authentication failed. User not found.'});
        } else {
                //console.log(req.body.noti);
                Brand.findOne({ _id : req.body._id}, function (err, docs) {
        if(!err&&docs)
        {
        docs.name =req.body.name;
  docs.category = req.body.category;
  
  docs.save();
  
  }
        });


                console.log("device edited");
        return res.send({success: true, msg: 'device edited'});
            }
    });
  } else {
    return res.status(403).send({success: false, msg: 'No token provided.'});
  }
};
exports.deletebrand =  function(req, res) {
  var token = getToken(req.headers);
  if (token) {
    var decoded = jwt.decode(token, config.secret);
    User.findOne({
      name: decoded.name
    }, function(err, user) {
        if (err) throw err;
 
        if (!user) {
          return res.status(403).send({success: false, msg: 'Authentication failed. User not found.'});
        } else {
    //console.log(req.body.noti);
    Brand.findOne({ _id : req.body.id}, function (err, docs) {
  if(!err)
  docs.remove();
  });

    
    console.log("device removed");
         return res.send({success: true, msg: 'device deleted'});
      }
    });
  } else {
    return res.status(403).send({success: false, msg: 'No token provided.'});
  }
};
exports.deleteorder =  function(req, res) {
  var token = getToken(req.headers);
  if (token) {
    var decoded = jwt.decode(token, config.secret);
    User.findOne({
      name: decoded.name
    }, function(err, user) {
        if (err) throw err;
 
        if (!user) {
          return res.status(403).send({success: false, msg: 'Authentication failed. User not found.'});
        } else {
    //console.log(req.body.noti);
    Order.findOne({ _id : req.body.id}, function (err, docs) {
  if(!err)
  docs.remove();
  });

    
    console.log("device removed");
         return res.send({success: true, msg: 'device deleted'});
      }
    });
  } else {
    return res.status(403).send({success: false, msg: 'No token provided.'});
  }
};
exports.deleteproduct =  function(req, res) {
  var token = getToken(req.headers);
  if (token) {
    var decoded = jwt.decode(token, config.secret);
    User.findOne({
      name: decoded.name
    }, function(err, user) {
        if (err) throw err;
 
        if (!user) {
          return res.status(403).send({success: false, msg: 'Authentication failed. User not found.'});
        } else {
    //console.log(req.body.noti);
    Product.findOne({ _id : req.body.id}, function (err, docs) {
  if(!err)
  docs.remove();
  });

    
    console.log("device removed");
         return res.send({success: true, msg: 'device deleted'});
      }
    });
  } else {
    return res.status(403).send({success: false, msg: 'No token provided.'});
  }
};
exports.deletecat =  function(req, res) {
  var token = getToken(req.headers);
  if (token) {
    var decoded = jwt.decode(token, config.secret);
    User.findOne({
      name: decoded.name
    }, function(err, user) {
        if (err) throw err;
 
        if (!user) {
          return res.status(403).send({success: false, msg: 'Authentication failed. User not found.'});
        } else {
    //console.log(req.body.noti);
    Category.findOne({ _id : req.body.id}, function (err, docs) {
  if(!err)
  docs.remove();
  });

    
    console.log("device removed");
         return res.send({success: true, msg: 'device deleted'});
      }
    });
  } else {
    return res.status(403).send({success: false, msg: 'No token provided.'});
  }
};
exports.deleteuser =  function(req, res) {
  var token = getToken(req.headers);
  if (token) {
    var decoded = jwt.decode(token, config.secret);
    User.findOne({
      name: decoded.name
    }, function(err, user) {
        if (err) throw err;
 
        if (!user) {
          return res.status(403).send({success: false, msg: 'Authentication failed. User not found.'});
        } else {
    //console.log(req.body.noti);
    User.findOne({ _id : req.body.id}, function (err, docs) {
  if(!err)
  docs.remove();
  });
    console.log("device removed");
         return res.send({success: true, msg: 'device deleted'});
      }
    });
  } else {
    return res.status(403).send({success: false, msg: 'No token provided.'});
  }
};


exports.getbrandsoncat = function(req , res){

  Brand.find({category:req.body.category} , function(err,result){
    if(!err){
      res.json({list:result});
    }
  });
};









getToken = function (headers) {
  if (headers && headers.authorization) {
    var parted = headers.authorization.split(' ');
    if (parted.length === 2) {
      return parted[1];
    } else {
      return null;
    }
  } else {
    return null;
  }
};



