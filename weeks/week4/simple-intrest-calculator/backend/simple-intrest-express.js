const bodyParser = require("body-parser")
const express = require("express")
const app = express()
const port = 5500;
app.use(bodyParser.json())

app.get("/simpleinterest",(req,res)=>{
    try{
        const principal = parseInt(req.query.principal)
        const rate = parseInt(req.query.rate)
        const time = parseInt(req.query.time)

        let interest = (principal*time*rate)/100;
        let total = principal + interest
        res.json({
            interest,
            total
        })
    }catch(error){
        res.status(400).json({
            msg:"unable to get output"
        })
    }

})

app.listen(port,()=>{
    console.log("lsitening on port "+port)
})