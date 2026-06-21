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

app.get("/register",(req,resp)=>{
    let {name="ananomous"}= req.query;
    req.session.name = name;
    if(name=== "ananomous"){
     req.flash("Sucess","Registration Sucess!")
    }
    else{
        req.flash("error","User Not Regioster Yet!")
    }
    
    resp.redirect("http://localhost:3000/hellow")
});

app.get("/hellow",(req,resp)=>{
    let name = req.session.name;
    resp.locals.Sucessm = req.flash("Sucess");
    resp.locals.Errorm = req.flash("error");
    resp.render("Page.ejs",{name:name});
})