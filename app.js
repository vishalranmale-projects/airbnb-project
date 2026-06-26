if(process.env.NODE_ENV!="production"){
const dotenv = require("dotenv");
dotenv.config();
}
const express = require("express");
const app = express();
const path = require("path");
const methodoverride = require("method-override");
const mongoose = require('mongoose');
const ejs = require("ejs");
const ejsmate = require("ejs-mate");
const listingRoutes  =require("./routes/listingsRoutes.js");
const reviesRoutes = require("./routes/reviewsRoutes.js");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const passportLocalStartegy = require("passport-local");
const user = require("./models/user.js");
const {signupform,signup,signinform,signin,logout}  = require("./controllers/usercontroller.js");
const userRoutes = require("./routes/userRoutes.js");
const multer = require("multer");
const sessionOptions = {
    secret:"Secret Code",
    resave:false,
    saveUninitialized:true,
    cookie:{
      expires:Date.now()+7*24*60*60*1000,
      maxAge:7*24*60*60*1000,
      httpOnly:true
    }
}
app.use(session(
  sessionOptions));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new passportLocalStartegy(user.authenticate()))
passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());

app.use((req,resp,next)=>{
    resp.locals.sucess = req.flash("sucess");
    resp.locals.error = req.flash("error");
    resp.locals.currUser = req.user;
    console.log(req.session);
    resp.locals.redirectUrl= req.session.redirectUrl;
    console.log(req.user);
    next();
})
mongoose.connect("mongodb://127.0.0.1:27017/wonderlust").then(()=>{
    console.log("Connection Established To An Wonderlust Database");
});
app.use(express.urlencoded({extended:true}));
app.use(methodoverride("_method"));
app.use(express.static(path.join(__dirname, "public")));
app.set("viewengine","ejs");
app.listen(3000,()=>{
    console.log("Server is Starting At An Port No 3000");
});
app.engine("ejs",ejsmate);
app.use(express.static("public"));
app.get("/",(req,resp)=>{
    resp.send("Welcome To Home!");
});
// Middleware To Route An Listing Model Requests
app.use("/Listings",listingRoutes);
// Middle Ware To routs An review Model Requests
app.use("/listings/:listing_id",reviesRoutes);
// Route To Render An Form To Get An New User Infro
app.use("/",userRoutes);
// Route for if An Request is Not Matched With An All The Following Routes
app.use((req,resp,next)=>{
    next(new ExpressError("Check Your API Request For This No One Route is Defined!",403));
});
app.use((err,req,resp,next)=>{
let {message="Something Went Wrong!",statusCode=403} = err;
resp.status(statusCode).render("./Listings/error.ejs",{err});
});