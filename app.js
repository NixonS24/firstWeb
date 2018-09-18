"use strict";

//Base Packages
var     express         = require("express"),
        app             = express(),
        mongoose        = require("mongoose"),
        bodyParser      = require("body-parser"),
        expressSanitizer= require("express-sanitizer"),
        Blog            = require("./models/blog");
const   sgMail          = require('@sendgrid/mail');

// var     GoogleMapAPIKey = require("./googleapi.env");
//This connects but does not load

//base declaration
var receivingEmailAdress = "sam@whaley.money";

mongoose.connect("mongodb://localhost/ground_search_local");
app.use(bodyParser.urlencoded({extended: true}));    //Connfigures the usage of app to automatically use Body-Parser as its middleware
app.use(express.static(__dirname +"/public"));     //Automatically load assets in public folder for use, however remember this needs to be linked in our sheets (usually in our header file)r)
// app.use(express.static(__dirname +"/scripts")); 
// console.log(__dirname +"/scripts");
app.set("view engine","ejs"); 
app.use(expressSanitizer());


//Own Google Cloud Account, potentially replace in the future
var GoogleMapAPIKey = process.env.APIKEYMAP; // Enviroment Variable for deployment version setup and working
console.log(GoogleMapAPIKey); //Having trouble storing this locally.

//Own SendGrid Account, 100 free per day on free plan + good analytics
var SendGridAPI = (process.env.SENDGRID_API_KEY); //Enviroment Variable for deployment version setup and working
sgMail.setApiKey(SendGridAPI);
console.log(SendGridAPI); //Having trouble storing this locally




app.get("/", function(req, res){
    res.redirect("/home");
    //refactor partners into home page or into partials
});

app.get("/home", function(req, res){
    res.render("home");
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

//BLOGS//

//Index Route 
app.get("/blog", function(req, res){
    Blog.find({}, function(error, blogs){
        if (error) {
            console.log('error');
        } else {
            res.render("blog", {blogs:blogs});
        }
    });
    //what new in ground search, maybe use the schema I had previously build
});  

//New Route
app.get("/blog/new", function (req, res){
    res.render("new");
});

//Create Routes - I need to put protection middleware in here
app.post("/blog", function(req, res){
    req.sanitize(req.body.blog.body);
    Blog.create(req.body.blog, function(error, newBlogPost){
        if (error){
            res.render("new");
        } else {
            res.redirect("/blog");
        }
    });
});

//Show route
app.get("/blog/:id", function(req, res){
    Blog.findById(req.params.id, function(error, foundBlog){
        if(error){
            res.redirect("/blog");
        } else {
            res.render("show",{blog: foundBlog});
        }
    });
});

app.get("/contact", function(req, res){
    res.render("contact", {GoogleMapAPIKey: GoogleMapAPIKey});
    //This will also be for employment and maybe job requests just have a thick how this links to above
});
app.post("/contact", function(req, res){
    const msg = {
      to: receivingEmailAdress,
      from: req.body.email,
      subject: 'Website Contact Email',
      html: req.body.msg + "<br><br>" + "PhoneNumber: " + req.body.phone + "<br>" + "Website: " + req.body.website + "<br><br>" + "From: " + req.body.name,
    };
    sgMail.send(msg);
    res.redirect("home");
    //This will also be for employment and maybe job requests just have a thick how this links to above
});


app.get("/for-sale", function(req, res){
    res.render("for-sale");
}); 

app.get("/login", function(req,res){
    res.render("login");
});

// i 

//no partners page, will refactor into 

// app.get("/partners", function(req, res){
//     res.send("partner page");
// });  

//refactor login to blog page








    
//Console Listening
app.listen(process.env.PORT,process.env.IP,function(){
    console.log('App is running');
});    