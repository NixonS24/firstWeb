//Don't require express or passport (imported with models)

//Models
//If required
var middlewareObject = {};

//This can be injected in any route as middleware
middlewareObject.isLoggedIn = function(req, res, next){
    if(req.isAuthenticated()){ 
        return next();
    } 
    req.flash("error", "Please Login First"); 
    res.redirect("/login");
};





module.exports = middlewareObject;