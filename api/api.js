const express = require('express');
const passport = require('passport');
const todoController = require('../controllers/todos');
const appController = require('../controllers/appcontroller');

const router = express.Router();

router.post('/todo', todoController.createTodo);
router.get('/todos', todoController.getTodos);
router.delete('/todo/:todoid', todoController.deleteTodo);
router.post('/signup', appController.signup);
router.post('/newuser', appController.newuser);
router.post('/authenticateuser',appController.authenticateuser);
router.post('/authenticatedist',appController.authenticatedist);
router.post('/authenticateadmin',appController.authenticateadmin);
router.post('/edituser',appController.edituser);
router.post('/deleteuser',appController.deleteuser);
router.get('/getallusers',appController.getallusers);
router.get('/getallvendors',appController.getallvendors);
router.post('/addproduct',appController.addproduct);
router.get('/getallproducts',appController.getallproducts);
router.post('/editproduct',appController.editproduct);
router.post('/addcategory',appController.addcategory);
router.post('/editcategory',appController.editcategory);
router.post('/addbrand',appController.addbrand);
router.post('/editbrand',appController.editbrand);
router.get('/getallbrands',appController.getallbrands);
router.get('/getallcat',appController.getallcat);
router.post('/placeorder',appController.placeorder);
router.get('/getallorders',appController.getallorders);
router.post('/editorder',appController.editorder);
router.post('/deleteorder',appController.deleteorder);
router.post('/deleteproduct',appController.deleteproduct);
router.post('/deletecat',appController.deletecat);
router.post('/deletebrand',appController.deletebrand);
router.post('/deleteuser',appController.deleteuser);
router.get('/siteSetting',appController.siteSetting);
//router.get('/getelectronics',appController.getelectronics);
//router.post('/getbrandsoncat',appController.getbrandsoncat);
router.get('/getallproductsv2',appController.getallproductsv2);

router.get('/getallcatv2',appController.getallcatv2);
router.get('/getsimilar_prod',appController.getsimilar_prod);
router.get('/getsubcategory',appController.getsubcategory);
router.get('/getsubbrand',appController.getsubbrand);
router.get('/recieveorders',appController.recieveorders);
router.get('/getcartitems',appController.getcartitems);
router.get('/deletecartitems', appController.deletecartitems);

// router.post('/upload',appController.upload);

















module.exports = router;
