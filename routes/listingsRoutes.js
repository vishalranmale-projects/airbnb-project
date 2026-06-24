const express = require("express");
const router = express.Router({mergeParams:true});
const ejsmate = require("ejs-mate");
const ExpressError = require("../utils/ExpressError.js");
const wrapAsync = require("../utils/wrapAsync.js");
const listings = require("../models/Listing.js");
const ValidateListing = require("../Schema.js");
const passport  = require("passport");
const flash = require("connect-flash");
const {isloggedIn} = require("../middleware.js");
const {isOwner} = require("../middleware.js");
const user = require("../models/user.js");
const {validateListing} = require("../middleware.js")
const {indexController} = require("../controllers/listingControllers.js");

router.get("/",wrapAsync(async(req,resp)=>{
   const allListings = await listings.find({});
   resp.render("./Listings/Listings.ejs",{allListings});
}));
// Route For An Render An Form In We Submit An New Listings Details
router.get("/New",isloggedIn ,(req, resp,next) => {
  resp.render("./Listings/newListings.ejs"); 
});
// Route to Show An Individual Listings (index Route)
router.get("/:id",indexController);

// Route To Render An Edit Form
router.get("/:id/Edit",isloggedIn,isOwner,wrapAsync(async(req,resp,next)=>{
    let {id} = req.params;
    let EntireListning = await listings.findById(id);
    if(!EntireListning){
       req.flash("error","listing Was Not Found!");
       resp.redirect("/Listings");
    }
    else{
       resp.render("./Listings/edit.ejs",{EntireListning});
    }
}));
// Route To Create An New Listing An Submitted Data By An Form To An MongoDB
router.post("/New",isloggedIn, validateListing, wrapAsync(async(req,resp,next)=>{
    let newListing = new listings({
        title:req.body.title,
        description:req.body.description,
        image:req.body.image,
        price:req.body.price,
        location:req.body.location,
        country:req.body.country,
        owner:req.user._id
    })
    req.flash()
   await newListing.save().then(()=>{
    console.log("Data Inserted Sucessfully!");
   });
   req.flash("sucess","New Listings Was Created Sucessfully!");
   resp.redirect("/Listings");  
}));
// Route To Update An Data From An Form To AN Database
router.put("/:id",isloggedIn,isOwner,validateListing,wrapAsync(async (req,resp,next)=>{
  // Autorization
 let {id}= req.params;
   let Data = req.body;
  await listings.findByIdAndUpdate(id,{
    title:Data.title,
    description:Data.description,
    image:Data.image,
    price:Data.price,
    location:Data.location,
    country:Data.country,
});
req.flash("sucess","Listing Was Updated!")
resp.redirect("/Listings");
}));

// Route To Delete An Particular Listings From An Database
router.delete("/:id",isloggedIn,isOwner,wrapAsync(async(req,resp,next)=>{
let {id} = req.params;
await listings.findByIdAndDelete(id);
    req.flash("sucess","Listing Was Deleted");
    resp.redirect("http://localhost:3000/Listings");
}));
module.exports = router;