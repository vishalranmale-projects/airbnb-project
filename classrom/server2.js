const express = require("express");
const app = express();
const cookieparser  = require("cookie-parser");

app.listen(8080,()=>{
    console.log("Server is Started On Port 3000");
});
app.use(cookieparser("SecretCode"));

app.get("/getCookie",(req,resp)=>{
    resp.cookie("Origin","india",{signed:true});
    resp.send("Cookie");
});

app.get("/",(req,resp)=>{
    console.log(req.cookies);
    resp.send(req.cookies);
})
