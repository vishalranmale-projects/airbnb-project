const mongoose = require('mongoose');
let reviews = require("./Reviews");
const { type } = require('../Schema');
let ListingScheme = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
       path:String,
       filename:String,
    },
    price:{
        type:Number,
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
    country:{
        type:String,
        required:true,
    },
    reviews:[{
       type: mongoose.Schema.Types.ObjectId,
       ref:"reviews"
    }],
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:true
    },
    categoery:{
        type:String,
    }
});
// Query Middleware To Delete An Particular Documents in Relationships
ListingScheme.post("findOneAndDelete",async(Listing)=>{
    console.log(Listing);
    for(let i=0;i<Listing.reviews.length;i++){
        await reviews.findByIdAndDelete(Listing.reviews[i]);
    }
})

// Creating An Actual Collection
const listings = new mongoose.model("listings",ListingScheme);
module.exports=listings;
