const listings = require("../models/Listing");
const listings = require("../models/Listing.js");
const flash = require("connect-flash");
const {isloggedIn} = require("../middleware.js");
const {isOwner} = require("../middleware.js");
const user = require("../models/user.js");
const {validateListing} = require("../middleware.js")
let indexController  = async(req,resp,next)=>{
    let id = req.params.id;
    let doc = await listings.findOne({_id:id});
    if(doc){

       doc = await doc.populate({path:"reviews",populate:{
        path:"author"
       }})
       doc = await doc.populate("owner");
    resp.render("./Listings/individualListing.ejs",{doc});
    }
    else{
     req.flash("listingnotfoundMsg","listing Was Not Found!");
     resp.redirect("/Listings");
    }       
}

module.exports = {indexController};
