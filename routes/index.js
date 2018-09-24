// INDEX ROUTES

var express = require("express");
var router  = express.Router();

var Blog = require("../models/blog");


router.get("/blog", function(req, res){
    Blog.find({}, function(error, blogs){
        if (error) {
            console.log('error');
        } else {
            blogs.reverse(); //reverse order of the json so most recent is displayed first
            res.render("blog/index", {blogs:blogs});
        }
    });
    //what new in ground search, maybe use the schema I had previously build
});  


router.get("/", function(req, res){
    res.redirect("/home");
    //refactor partners into home page or into partials
});

router.get("/home", function(req, res){
    res.render("home");
    //what new in ground search, maybe use the schema I had previously build
});  

router.get("/about", function(req, res){
    res.render("about");
    //does not exist in groundserach
});   

router.get("/services", function(req, res){
    res.render("services");
    //does not exist in groundSearch Australia
});

router.get("/for-sale", function(req, res){
    res.render("for-sale");
}); 

router.get("/login", function(req,res){
    res.render("login");
});


module.exports = router;