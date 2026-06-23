const express = require("express");
const app = express();
const cookieparser  = require("cookie-parser");
const session  = require("express-session");
const flash = require('connect-flash');
const ejs = require('ejs');
app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
const sessionOptions = {
    secret:"My Secret Code!",resave:false,saveUninitialized:true
}
app.listen(3000,()=>{
    console.log("Server is Started On Port 3000");
});
// Middleware For An Express Session
app.use(session(sessionOptions));
app.use(flash());
app.use((req,resp,next)=>{
    // Adding An Flash Messages To An res.locals
    resp.locals.errorMsg = req.flash("error");
    resp.locals.sucessMsg = req.flash("sucess");
    next();
})
app.get("/register",(req,resp)=>{
    let {name="ananomous"} = req.query;
    req.session.name = name;
    if(name==="ananomous"){
        req.flash("error","user not Register yet!");
    }
    else{
        req.flash("sucess","user Was Register Sucessfully!");
    }
    resp.redirect("http://localhost:3000/hellow")
    
});

app.get("/hellow",(req,resp)=>{
   const name  = req.session.name;
   resp.render("Page.ejs",{name});
   
})
