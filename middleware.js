const listings = require("./models/Listing");
const validateListingSchema = require("./Schema");
const validateReviewSchema= require("./validateReviewSchema");
const reviews = require("./models/Reviews");
 function isloggedIn(req,resp,next){
    if(!req.isAuthenticated()){
     req.session.redirectUrl = req.originalUrl;
    console.log(req.session);
      req.flash("error","please logged in First!");
      resp.redirect("/signin");
    }
    else{
        next();
    }
}


const isOwner = (async(req,resp,next)=>{
  let {id} = req.params;
  let ListingData = await listings.findById(id);
  if(!(req.user && req.user._id.equals(ListingData.owner))){
    req.flash("error","You Are Not Owner of This Listings!");
    resp.redirect(`/Listings/${id}`);
  } 
  else{
    next();
  }
});

const validateListing = (req,resp,next)=>{
  let {error} = validateListingSchema.validate(req.body);
  if(error){
  next(error);
  }
  else{
    next();
  }
}

function validateReview(req,resp,next){
    const {error} = validateReviewSchema.validate(req.body);
    if(error){
        next(error);//Calling An Error Handling Middleware
    }
    else{
        next();//Simply Execute An Another Route
    }
}
 async function isAuthor(req,resp,next){
  let Listing_id = req.params.listing_id;
  let reviewId = req.params.review_id;
  let reviewDetails = await reviews.findById(reviewId).populate("author")
  if(!(req.user._id.equals(reviewDetails.author._id))){
    req.flash("error","You Are Not An Author of An Current review!");
    resp.redirect(`/Listings/${Listing_id}`);
  }
  else{
    next();
  }
}

module.exports = {isloggedIn,isOwner,validateReview,validateListing,isAuthor};