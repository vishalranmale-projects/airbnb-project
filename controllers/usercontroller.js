const flash = require("connect-flash");
const user = require("../models/user");



let signupform = (req,resp)=>{
    resp.render("./users/signup.ejs");
};

let signup = async(req,resp,next)=>{
    try{
         let user1 = new user({
        username:req.body.username,
        email_id:req.body.email_id,
    });
    const res =await user.register(user1,req.body.password);
    req.login(res,(err)=>{
        if(err){
            next(err);
        }
        else{
            req.flash("sucess","Welcome To Wonderlust");
            resp.redirect("/Listings");
        }
    });
    }
    catch(err){
        req.flash("error",err.message)
        resp.redirect("/signup");
    }
}

let signin = (req,resp)=>{
    req.flash("sucess","Welcome To Wonderlust!")
    let url = req.session.redirectUrl;
   if(resp.locals.redirectUrl && resp.locals.redirectUrl.length!=0){
    resp.redirect(`${ resp.locals.redirectUrl}`);
   }
   else{
    resp.redirect("/Listings");
   }
}

let signinform = (req,resp)=>{
 resp.render("./users/signin.ejs");
}

let logout = (req,resp,next)=>{
    req.logOut((err)=>{
        if(err){
            req.flash("error",err.message);
            next(err);
        }
        else{
            req.flash("sucess","logout Sucessfully");
            resp.redirect("/Listings");
        }
    })
}
module.exports = {signupform,signup,signin,signinform,logout
}
