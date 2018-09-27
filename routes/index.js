// INDEX ROUTES

var express = require("express");
var router  = express.Router();


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


module.exports = router;