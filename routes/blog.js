//BLOGS//

var express = require("express");
var router = express.Router();

//Models
var Blog = require("../models/blog");


//Index Route 
router.get("/", function(req, res){
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

//New Route
router.get("/new", function (req, res){
    res.render("blog/new");
});

//Create Routes - I need to put protection middleware in here
router.post("/", function(req, res){
    req.sanitize(req.body.blog.body);
    Blog.create(req.body.blog, function(error, newBlogPost){
        if (error){
            res.render("blog/new");
        } else {
            res.redirect("back");
        }
    });
});

//Show route
router.get("/:id", function(req, res){
    Blog.findById(req.params.id, function(error, foundBlog){
        if(error){
            res.redirect("back");
        } else {
            res.render("blog/show",{blog: foundBlog});
        }
    });
});


//Edit Route
router.get("/:id/edit", function(req, res){
    Blog.findById(req.params.id, function(error, foundBlog){
        res.render("blog/edit", {blog: foundBlog});
    });
});

//Update Route
router.put("/:id", function(req, res){
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(error, updatedBlog){
        if (error) {
            res.redirect("back");
        } else {
            res.redirect("/blog/"+ req.params.id);
        }
    });
});

//Destory route
router.delete("/:id", function(req, res){
    Blog.findByIdAndRemove(req.params.id, function(error){
        if (error){
            res.redirect('back');
        } else {
            res.redirect("/blog");
        }
    })
});

module.exports = router;

