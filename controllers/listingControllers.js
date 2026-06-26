const listings = require("../models/Listing");
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

let showListings  = async(req,resp)=>{
   const allListings = await listings.find({});
   resp.render("./Listings/Listings.ejs",{allListings});
}
let showEditform = async(req,resp,next)=>{
    let {id} = req.params;
    let EntireListning = await listings.findById(id);
    if(!EntireListning){
       req.flash("error","listing Was Not Found!");
       resp.redirect("/Listings");
    }
    else{
       resp.render("./Listings/edit.ejs",{EntireListning});
    }
}
let newListing = async(req,resp,next)=>{
    let newListing = new listings({
        title:req.body.title,
        description:req.body.description,
        image:{
        path:req.file.path,
        filename:req.file.filename
        },
        price:req.body.price,
        location:req.body.location,
        country:req.body.country,
        owner:req.user._id
    })
    console.log(req.file);
   await newListing.save().then(()=>{
    console.log("Data Inserted Sucessfully!");
   });
   req.flash("sucess","New Listings Was Created Sucessfully!");
   resp.redirect("/Listings");  
}

let updateListing = async(req,resp,next)=>{
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
}

let deleteListing = async(req,resp,next)=>{
let {id} = req.params;
await listings.findByIdAndDelete(id);
    req.flash("sucess","Listing Was Deleted");
    resp.redirect("http://localhost:3000/Listings");
}
module.exports = {indexController,showListings,showEditform,newListing,updateListing,deleteListing};
