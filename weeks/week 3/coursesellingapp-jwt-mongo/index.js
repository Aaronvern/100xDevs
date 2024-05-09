const express = require ("express")
const app = express();
const adminRouter= require ("../coursesellingapp-jwt-mongo/routes/admin")
const userRouter= require ("../coursesellingapp-jwt-mongo/routes/user")
const port = 3000;
const bodyParser = require("body-parser");


app.use(bodyParser.json())
app.use("/user",userRouter)
app.use("/admin",adminRouter)

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})



