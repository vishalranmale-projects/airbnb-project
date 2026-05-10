const express = require("express");
const app = express();
const methodoverride = require("method-override");
const mongoose = require('mongoose');
const ejs = require("ejs");
const ejsmate = require("ejs-mate");
app.set("viewengine","ejs");
const listings = require("./models/Listing.js");
mongoose.connect("mongodb://127.0.0.1:27017/wonderlust").then(()=>{
    console.log("Connection Established To An Wonderlust Database");
});
app.use(express.urlencoded({extended:true}));
app.use(methodoverride("_method"));
app.listen(3000,()=>{
    console.log("Server is Starting At An Port No 3000");
});
// Rote To Display An All The Listings From An Database
app.get("/Listings",async(req,resp)=>{
   const allListings = await listings.find({});
   resp.render("./Listings/Listings.ejs",{allListings});
});
// Route For An Render An Form In We Submit An New Listings Details
app.get("/Listings/New", (req, res) => {
  res.render("./Listings/newListings.ejs");
});
// Route to Show An Individual Listings 
app.get("/Listings/:id",async(req,resp)=>{
    let id = req.params.id;
    let doc = await listings.find({_id:id});
    console.log(doc);
    resp.render("./Listings/individualListing.ejs",{doc});
});
// Route To Update An Submitted Data By An Form To An MongoDB
app.post("/Listings/New",async(req,resp)=>{
    console.log(req.body);
    let newListing = new listings({
        title:req.body.title,
        description:req.body.description,
        image:req.body.image,
        price:req.body.price,
        location:req.body.location,
        country:req.body.country,
    })
   await newListing.save().then(()=>{
    console.log("Data Inserted Sucessfully!");
   });
   resp.redirect("/Listings");
});
// Route To Render An Edit Form
app.get("/Listings/:id/Edit",async(req,resp)=>{
    let id = req.params.id;
    let EntireListning = await listings.findById(id);
   resp.render("./Listings/edit.ejs",{EntireListning});
});
// Route To Update An Data From An Form To AN Database
app.put("/Listings/:id",async (req,resp)=>{
    let id= req.params.id;
    let Data = req.body;
    console.log(Data.title);
    console.log(Data);
 await listings.findByIdAndUpdate(id,{
    title:Data.title,
    description:Data.description,
    image:Data.image,
    price:Data.price,
    location:Data.location,
    country:Data.country,
});
resp.redirect("/Listings");
});
// Route To Delete An Particular Listings From An Database
app.delete("/Listings/:id",async(req,resp)=>{
    let id = req.params.id;
    await listings.findByIdAndDelete(id);
    resp.redirect("http://localhost:3000/Listings");
});

app.engine("ejs",ejsmate);
app.use(express.static("public"));
app.get("/",(req,resp)=>{
    resp.send("Welcome To Home!");
})
