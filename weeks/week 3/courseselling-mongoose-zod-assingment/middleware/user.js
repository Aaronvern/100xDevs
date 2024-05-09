const { User }= require("../database/indexdb")

//middleware for user authentication 

function userMiddleware(req,res,next){
    const username = req.headers.username;
    const password = req.headers.password;

    User.findOne({
        username:username,
        password:password
    }).then((value)=>{
        if(value){
            next();
        }
        else{
            res.status(403).json({
                msg:"access denied cause user not present "
            })
        }
    })
}

module.exports = userMiddleware;