"use strict";

//Base Packages
var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    $           = require('jquery');
  
app.use(bodyParser.urlencoded({extended: true}));    //Connfigures the usage of app to automatically use Body-Parser as its middleware
app.use(express.static(__dirname +"/public"));     //Automatically load assets in public folder for use, however remember this needs to be linked in our sheets (usually in our header file)r)
// app.use(express.static(__dirname + "/styles"));
app.set("view engine","ejs");  
    
    
app.get("/", function(req, res){
    res.redirect("/home");
    //refactor partners into home page or into partials
});

app.get("/home", function(req, res){
    res.render("home", {$:$});
    //what new in ground search, maybe use the schema I had previously build
});  

app.get("/about", function(req, res){
    res.render("about");
    //does not exist in groundserach
});   

app.get("/services", function(req, res){
    res.render("services");
    //does not exist in groundSearch Australia
});   

app.get("/blog", function(req, res){
    res.render("blog");
    //what new in ground search, maybe use the schema I had previously build
});  

app.get("/contact", function(req, res){
    res.render("contact");
    //This will also be for employment and maybe job requests just have a thick how this links to above
});   

//no partners page, will refactor into 

// app.get("/partners", function(req, res){
//     res.send("partner page");
// });  

//refactor login to blog page

app.get("/for-sale", function(req, res){
    res.render("for-sale");
}); 






    
//Console Listening
app.listen(process.env.PORT,process.env.IP,function(){
    console.log('App is running');
});    