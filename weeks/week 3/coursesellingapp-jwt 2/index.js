const express = require ("express");
const bodyParser = require ("body-parser");
const app = express();
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");
const port = 3000;
app.use(bodyParser.json());
app.use("/admin",adminRouter);
app.use("/user",userRouter);

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})