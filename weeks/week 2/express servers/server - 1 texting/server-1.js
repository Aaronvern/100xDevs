const express = require ('express');
const port = 5500;
const a = express();

a.get('/',function (req,res){
    res.send("hello its me aaron");
})

a.get('/route-nat',(req,res)=>{
    res.send("hello nat");
})

a.listen(port,()=>{
    console.log("listining on host "+port);
});