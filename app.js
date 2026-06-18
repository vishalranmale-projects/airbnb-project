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
// Route for if An Request is Not Matched With An All The Following Routes
app.use((req,resp,next)=>{
    next(new ExpressError("Check Your API Request For This No One Route is Defined!",403));
})
app.use((err,req,resp,next)=>{
let {message="Something Went Wrong!",statusCode=403} = err;
resp.status(statusCode).render("./Listings/error.ejs",{err});
});
