// INDEX ROUTES

var express = require("express");
var router  = express.Router();

//Models
var ForSale = require("../models/for-sale");


//For Sale Routes 

//Index route
router.get("/", function(req, res){
    ForSale.find({}, function(error, forSales){
        if (error){
            console.log('error');
        } else {
            forSales.reverse();
            res.render("for-sale/index", {forSales: forSales});
        }
    });
}); 

//New
router.get("/new", function(req, res){
    res.render("for-sale/new");
});

//create
router.post("/", function(req, res){
    req.sanitize(req.body.forSale.body);
    ForSale.create(req.body.forSale, function(error, newForSale){
        if (error) {
            res.render("for-sale/new");
        } else {
            res.redirect("/for-sale");
        }
    });
});


//Show 
router.get("/:id", function(req, res){
    ForSale.findById(req.params.id, function(error, foundForSale){
        if (error) {
            res.redirect('back');
        } else {
            res.render("for-sale/show", {forSale: foundForSale});
        }
    });
});

//Edit
router.get("/:id/edit", function(req, res){
    ForSale.findById(req.params.id, function(error, foundForSale){
        res.render("for-sale/edit", {forSale: foundForSale});
    });
});

//Update
router.put("/:id", function(req, res){
    ForSale.findByIdAndUpdate(req.params.id, req.body.forSale, function(error, updateForSale){
        if (error) {
            res.redirect('back');
        } else {
            res.redirect("/for-sale/" + req.params.id);
        }
    });
});

//Destory
router.delete("/:id", function(req, res){
    ForSale.findByIdAndRemove(req.params.id, function(error){
        if (error) {
            res.redirect('back');
        } else {
            res.redirect("/for-sale");
        }
    });
});


module.exports = router;