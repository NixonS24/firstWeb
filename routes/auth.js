// INDEX ROUTES

var express         = require("express");
var router          = express.Router();

//Models
var User            = require("../models/user");

//Auth
var passport        = require("passport");


router.get("/register", function(req, res){
    res.render('auth/register');
});

router.post("/register", function(req,res){
    User.register(new User({username:req.body.username}), req.body.password, function(error, user){
        if(error){
            console.log(error);
            res.render('auth/register');
        } else {
            passport.authenticate('local')(req, res, function(){
                res.redirect("home");
            });
        }
    });
});

router.get("/login", function(req, res){
    res.render("auth/login");
});

router.post("/login", passport.authenticate("local", {
    successRedirect: "/home",
    failureRedirect: "/login"
}) ,function(req, res){
   //Empty because breakage above
});

//Logout Rotue
router.get("/logout", function(req,res){
    req.logout(); 
    //req.flash("error", "Logged you out");
    res.redirect("/home");
});





module.exports = router;