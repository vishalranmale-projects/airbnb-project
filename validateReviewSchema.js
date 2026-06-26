const joi = require("joi");

module.exports = joi.object({
    comment:joi.string().required(),
    rating:joi.number().required().min(0).max(5)
})