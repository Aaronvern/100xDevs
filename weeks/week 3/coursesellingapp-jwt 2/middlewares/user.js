//middleware to authenticate a User
const { User } = require ("../database/indexdb")
function userMiddleware(req,res,next){
    const username = req.headers.username;
    const password = req.headers.password;

    User.findOne({
        username,
        password
    }).then((value)=>{
        if(value){
            next();
        }
        else{
            res.json({
                msg:"invalid User. access not allowed"
            })
        }
    })

}



module.exports= userMiddleware;