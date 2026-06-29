
const express = require("express");
const router = express.Router();
const passport = require("passport");
const {signupform,signup,signinform,signin,logout}  = require("../controllers/usercontroller");
// Route To Render An Form To Get An New User Infro
router.get("/signup",signupform);
router.post("/signup",signup)
// Route To Render An Sign-in Form
router.get("/signin",signinform)
// Route To Authenticate An user Data For An Signup
router.post("/signin",passport.authenticate("local",{
    failureRedirect:"/signin",
    failureFlash:true
}),signin)
// Route To Logout An Current User
router.get("/logout",logout);

module.exports  = router;
