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
const {indexController,showListings,showEditform,newListing,updateListing,deleteListing} = require("../controllers/listingControllers.js");
const multer = require("multer");
const storege = require("../cloudconfig.js");
const upload = multer(storege);
router.get("/",wrapAsync(showListings));
// Route For An Render An Form In We Submit An New Listings Details
router.get("/New",isloggedIn ,(req, resp,next) => {
  resp.render("./Listings/newListings.ejs"); 
});
// Route to Show An Individual Listings (index Route)
router.get("/:id",indexController);
// Route To Render An Edit Form
router.get("/:id/Edit",isloggedIn,isOwner,wrapAsync(showEditform));
// Route To Create An New Listing An Submitted Data By An Form To An MongoDB
router.post("/New",isloggedIn, validateListing,upload.single("image"), wrapAsync(newListing))

// Route To Update An Data From An Form To AN Database
router.put("/:id",isloggedIn,isOwner,validateListing,upload.single("image"),wrapAsync( updateListing));

// Route To Delete An Particular Listings From An Database
router.delete("/:id",isloggedIn,isOwner,wrapAsync(deleteListing));
router.post("/search",async (req,resp)=>{
let {title} = req.body;
let listingData = await listings.findOne({title:title});
console.log(listingData);
if( listingData === null){
  req.flash("error","Listing Not Found!");
  return resp.redirect("/Listings")
}
else{
resp.redirect(`/Listings/${listingData._id}`);
}
})
router.get("/individual/categorey",async(req,resp)=>{
 const categoery = req.query.categoery;
 const  listings2 =await listings.find({categoery:categoery});
 resp.render("./Listings/categoreyListings.ejs",{listings2});
})
module.exports = router;
