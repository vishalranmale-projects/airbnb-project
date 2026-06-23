const express = require("express");
const routes  = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync.js");
const reviews = require("../models/Reviews.js");
const listings = require("../models/Listing.js");
const validateReviewSchema = require("../validateReviewSchema.js"); 
const flash = require("connect-flash");
const isloggedIn = require("../middleware.js");
// Function To Validate An Review
function validatereviewf(req,resp,next){
    const {error} = validateReviewSchema.validate(req.body);
    if(error){
        next(error);//Calling An Error Handling Middleware
    }
    else{
        next();//Simply Execute An Another Route
    }
}
// Route To Submit An Review To An Review Table
routes.post("/reviews",isloggedIn,validatereviewf,wrapAsync(async(req,resp)=>{
let review  = req.body;
let review1 = new reviews({
    comment : review.comment,
    rating:review.rating
});
await review1.save().then(()=>{
    console.log("Review Was Saved!");
});
let id1 = req.params.listing_id;
let Listing = await listings.findById(id1);

 Listing.reviews.push(review1);
 await Listing.save();
 console.log(id1);
 req.flash("sucess","Review Was Created!");
 resp.redirect(`/Listings/${id1}`);
}));
// Route To delete An Particular Review
routes.delete("/review/:review_id",isloggedIn,async(req,resp)=>{
    let Listing_id = req.params.listing_id;
    let review_id = req.params.review_id;
    let listing = await listings.findById(Listing_id);
    listing.reviews.pull(review_id);//The review Id Was Get Deleted From An reviews Array
    await listing.save();
    await reviews.findByIdAndDelete(review_id);
    req.flash("sucess","The Review Was Deleted!");
  resp.redirect(`/Listings/${Listing_id}`);
});

module.exports = routes;