//Don't require express or passport (imported with models)

//Models
//If required
var middlewareObject = {};

//This can be injected in any route as middleware
middlewareObject.isLoggedIn = function(req, res, next){
    if(req.isAuthenticated()){ 
        return next();
    } 
    //req.flash("error", "Please Login First"); //Won't be displayed until the next thing we see
    res.redirect("/login");
};





module.exports = middlewareObject;