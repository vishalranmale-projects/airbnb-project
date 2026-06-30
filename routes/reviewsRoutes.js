const express = require("express");
const routes  = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync.js");
const reviews = require("../models/Reviews.js");
const listings = require("../models/Listing.js");
const validateReviewSchema = require("../validateReviewSchema.js"); 
const flash = require("connect-flash");
const {isloggedIn} = require("../middleware.js");
const {validateReview} = require("../middleware.js")
const {isAuthor}  =require("../middleware.js");
const {deleteReview,createReview} = require("../controllers/reviewController.js")

// Route To Submit An Review To An Review Table
routes.post("/reviews",isloggedIn,validateReview,wrapAsync(createReview));
// Route To delete An Particular Review
routes.delete("/review/:review_id",isloggedIn,isAuthor,deleteReview);

module.exports = routes;
