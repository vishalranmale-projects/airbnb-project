const express = require("express");
const router = express.Router({mergeParams:true});
const ejsmate = require("ejs-mate");
const ExpressError = require("../utils/ExpressError.js");
const wrapAsync = require("../utils/wrapAsync.js");
const listings = require("../models/Listing.js");
const ValidateListing = require("../Schema.js");
const Validate = (req,resp,next)=>{
  let {error} = ValidateListing.validate(req.body);
  if(error){
  next(error);
  }
  else{
    next();
  }
}

router.get("/",wrapAsync(async(req,resp)=>{
   const allListings = await listings.find({});
   resp.locals.NewListingMsg = req.flash("updateMsg")
   const messages = {
    createMsg  : req.flash("createMsg"),
    updateMsg :req.flash("updateMsg"),
    deleteMsg :req.flash("deleteMsg")
   }
   resp.render("./Listings/Listings.ejs",{allListings,messages});
}));
// Route For An Render An Form In We Submit An New Listings Details
router.get("/New", (req, res,next) => {
  res.render("./Listings/newListings.ejs");
});
// Route to Show An Individual Listings 
router.get("/:id",async(req,resp,next)=>{
    let id = req.params.id;
    let doc = await listings.findOne({_id:id});
        doc = await doc.populate("reviews");  
    resp.render("./Listings/individualListing.ejs",{doc});
});
// Route To Create An New Listing An Submitted Data By An Form To An MongoDB
router.post("/New",Validate , wrapAsync(async(req,resp,next)=>{
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
}));
// Route To Render An Edit Form
router.get("/:id/Edit",wrapAsync(async(req,resp,next)=>{
    
  let id = req.params.id;
    let EntireListning = await listings.findById(id);
   resp.render("./Listings/edit.ejs",{EntireListning});
}));
// Route To Update An Data From An Form To AN Database
router.put("/:id",Validate,wrapAsync(async (req,resp,next)=>{
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
req.flash("updateMsg","Listing Was Updated!")
resp.redirect("/Listings");
}));
// Route To Delete An Particular Listings From An Database
router.delete("/:id",wrapAsync(async(req,resp,next)=>{
let id = req.params.id;
    await listings.findByIdAndDelete(id);
    req.flash("deleteMsg","Listing Was Deleted");
    resp.redirect("http://localhost:3000/Listings");
}));
module.exports = router;