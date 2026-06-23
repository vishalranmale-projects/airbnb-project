module.exports = function isloggedIn(req,resp,next){
    if(!req.isAuthenticated()){
      req.flash("error","please logged in First!");
      resp.redirect("/signin");
    }
    else{
        next();
    }
}

