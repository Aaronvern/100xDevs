const express = require('express');
const a= express();
const port = 3000;

a.get('/',(req,res)=>{
    console.log("hello nat")
})
a.listen(port);

