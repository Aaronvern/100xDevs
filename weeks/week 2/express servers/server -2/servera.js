const express= require('express');
const app= express();
const port= 3000;

function calculate(a){
    let fact=0;
    for (i=0;i<a;i++){
        fact =a*i;
    }
return fact;
}

function sum(a,b){
    let  sum=parseInt(a)+parseInt(b);
    return sum;
}

app.get('/',(req,res)=>{
    const n=req.query.n;
    const n2=req.query.n2;
    const ans = sum(n,n2);
    res.send("<center><h1>"+n+"+"+n2+"="+ans.toString()+"</h1></center>");
})

app.listen(port,()=>{
    console.log("listening from port 3000");
})