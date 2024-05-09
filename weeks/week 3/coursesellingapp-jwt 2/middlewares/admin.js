//middleware to authenticate an Admin 
const { Admin }= require("../database/indexdb")
function adminMiddleware(req,res,next){
    const username = req.headers.username;
    const password = req.headers.password;

    Admin.findOne({
        username,
        password
    }).then((value)=>{
        if(value){
            next();
        }else{
            res.json({
                msg:"invalid Admin. access not allowed"
            })
        }
    })

}

module.exports= adminMiddleware;