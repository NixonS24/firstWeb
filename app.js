"use strict";

//Base Packages
var     express         = require("express"),
        app             = express(),
        mongoose        = require("mongoose"),
        bodyParser      = require("body-parser"),
        methodOverride  = require('method-override'),
        expressSanitizer= require("express-sanitizer"),
        flash           = require("connect-flash"), //needs to be before passport.
        passport        = require("passport"),
        LocalStrategy   = require("passport-local");
const   sgMail          = require('@sendgrid/mail');

//Routes
var     blogRoutes      = require("./routes/blog");
var     indexRoutes     = require("./routes/index");
var     forSaleRoutes   = require("./routes/for-sale");
var     authRoutes      = require("./routes/auth");

//Models
var     Blog            = require("./models/blog");     //I actually don't think this needs to be here, but it is nice for everything to be stored in one location
var     ForSale         = require("./models/for-sale");
var     User            = require("./models/user");
// var     GoogleMapAPIKey = require("./googleapi.env");
//This connects but does not load

//base declaration
var receivingEmailAdress = "sam@whaley.money";
console.log(process.env.DATABASEURL);
var databaseUrl = process.env.DATABASEURL || "mongodb://localhost/ground_search_local";
mongoose.connect(databaseUrl, {useNewUrlParser: true});

app.use(bodyParser.urlencoded({extended: true}));    //Connfigures the usage of app to automatically use Body-Parser as its middleware
app.use(express.static(__dirname +"/public"));     //Automatically load assets in public folder for use, however remember this needs to be linked in our sheets (usually in our header file)r)
// app.use(express.static(__dirname +"/scripts")); 
// console.log(__dirname +"/scripts");
app.set("view engine","ejs"); 
app.use(methodOverride("_method"));
app.use(expressSanitizer());
app.use(flash()); //enable flash

//Depreciaiton warning "colleciton.findAndModigy is deprecated" - stops the warning
mongoose.set('useFindAndModify', false);

//Authentication logic
app.use(require('express-session')({
    secret: "This is usually a string of intelligiable code asdfakjsdfwaieor",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


//Own Google Cloud Account, potentially replace in the future
var GoogleMapAPIKey = process.env.APIKEYMAP; // Enviroment Variable for deployment version setup and working
console.log(GoogleMapAPIKey); //Having trouble storing this locally.

//Own SendGrid Account, 100 free per day on free plan + good analytics
var SendGridAPI = (process.env.SENDGRID_API_KEY); //Enviroment Variable for deployment version setup and working
sgMail.setApiKey(SendGridAPI);
console.log(SendGridAPI); //Having trouble storing this locally

//Enable the contents to be accessed in all pages
app.use(function(req, res, next) {
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    res.locals.currentUser = req.user;
    next(); //This allows the code to execute after our middlware
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




//Importing modulrised route structure
app.use(indexRoutes);
app.use(authRoutes);
app.use("/blog", blogRoutes);
app.use("/for-sale", forSaleRoutes);




//Console Listening
app.listen(process.env.PORT,process.env.IP,function(){
    console.log('App is running');
});    