"use strict";

//Base Packages
var     express     = require("express"),
        app         = express(),
        bodyParser  = require("body-parser");
const   sgMail      = require('@sendgrid/mail');

//base declaration
var receivingEmailAdress = "sam.nixon@hotmail.com.au";

app.use(bodyParser.urlencoded({extended: true}));    //Connfigures the usage of app to automatically use Body-Parser as its middleware
app.use(express.static(__dirname +"/public"));     //Automatically load assets in public folder for use, however remember this needs to be linked in our sheets (usually in our header file)r)
app.set("view engine","ejs");  

//Own Google Cloud Account, potentially replace in the future
var GoogleMapAPIKey = process.env.APIKEYMAP; //TODO, setup enviroment variable server side. 
console.log(process.env.APIKEYMAP); //check that enviroment variable is correctly storing APIKEYMAP

//Own SendGrid Account, 100 free per day on free plan + good analytics
var SendGridAPI = process.env.SENDGRID_API_KEY; //TODO, setupEnviromentVatiable
console.log(SendGridAPI); //check that enviroment variable is correclty setup



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

app.get("/blog", function(req, res){
    res.render("blog");
    //what new in ground search, maybe use the schema I had previously build
});  

app.get("/contact", function(req, res){
    res.render("contact", {GoogleMapAPIKey: GoogleMapAPIKey});
    //This will also be for employment and maybe job requests just have a thick how this links to above
});
app.post("/contact", function(req, res){
    console.log(req.body);
    sgMail.setApiKey(SendGridAPI);
    console.log(receivingEmailAdress);
    const msg = {
      to: "sam.nixon@hotmail.com.au",
      from: req.body.email,
      subject: 'Website Contact Email',
      html: req.body.msg + "<br>" + "PhoneNumber: " + req.body.phone + "Website: " + "<br>" + req.body.website + "<br><br>" + "From: " + req.body.name,
    };
    console.log(msg);
    sgMail.send(msg);
    res.redirect("home");
    //This will also be for employment and maybe job requests just have a thick how this links to above
});


app.get("/for-sale", function(req, res){
    res.render("for-sale");
}); 

app.get("/login", function(req,res){
    res.render("login");
})

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