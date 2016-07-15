/*
 * Module dependencies
 */
var express = require('express');
var app = express();
var router = express.Router();
var path = __dirname + '/';

router.use(function (req,res,next){
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendfile(path + "views/index.html");
});

router.get("/about",function(req,res){
  res.sendFile(path + "about.html");
});

router.get("/contact",function(req,res){
  res.sendFile(path + "contact.html");
});

app.use("/",router);
app.use('/images',express.static(__dirname +'/images'));
app.use('/js',express.static(__dirname + '/js'));
app.use('/css',express.static(__dirname + '/css'));
/*
app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});
*/
app.listen(3000,function(){
  console.log("Live at Port 3000");
});

