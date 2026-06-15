function wrapAsync(fn){
    return (req,resp,next)=>{
        fn(req,resp,next).catch((err)=>{
            next(err);
        })
    }
}

module.exports = wrapAsync;