const express=require('express');
const bodyParser = require('body-parser');
const app=express();
const port = 3000;

app.use(bodyParser.json());
 
function authmiddleware(req,res,next){
    const userName= req.headers.userName;
    const password= req.headers.password;
    if(userName != "aaron" && password != "123456"){
        res.status(403).json({
            msg:"access denied"
            })
            return
    }
    next();
}
app.get('/',authmiddleware,(req,res)=>{
    
    res.json({
        msg:"you got the best kidneys"
    })
})

app.listen(port,()=>{
    console.log("listening on port "+ port)
})