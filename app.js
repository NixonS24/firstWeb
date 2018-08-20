"use strict";

//Base Packages
var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    http        = require("http");
  
app.use(bodyParser.urlencoded({extended: true}));    //Connfigures the usage of app to automatically use Body-Parser as its middleware
app.use(express.static(__dirname +"/images"));     //Automatically load assets in public folder for use, however remember this needs to be linked in our sheets (usually in our header file)r)
app.use(express.static(__dirname + "/styles"));
console.log(__dirname + "/images");
app.set("view engine","ejs");  
    
    
app.get("/", function(req, res){
    res.render("index");
});    
    
//Console Listening
app.listen(process.env.PORT,process.env.IP,function(){
    console.log('App is running');
});    