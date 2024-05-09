const { Admin } = require("../database/indexdb")
const jwt = require("jsonwebtoken")
const JWT_SECRET= require("../pass");


function  adminMiddleware(req,res,next){
    const token = req.headers.authorization
    const something = token.split(" ")
    const jwtToken = something[1]
    const value = jwt.verify(jwtToken,JWT_SECRET)
    if(value.username){
        next()
    }else{
        res.status(400).json({
            msg:"invalid user"
        })
    }
}

module.exports= adminMiddleware;