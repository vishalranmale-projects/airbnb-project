const joi = require("joi");

let ListingSchema = joi.object({
    title:joi.string().required(),
     description:joi.string().required(),
      image:joi.string(),
       price:joi.number().required().min(0),
    location:joi.string().required(),
     country:joi.string().required()
});
module.exports = ListingSchema;
