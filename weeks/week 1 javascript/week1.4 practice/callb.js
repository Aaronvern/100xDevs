function square(a){
    return a*a;
}
function cube(a){
    return a*a*a;
}
function add(a,b,funtocall){
    let sum1 = funtocall(a);
    let sum2 = funtocall(b);
    return sum1+sum2;
}
let ans= add(10,20,cube);
setTimeout(()=>{
    console.log(ans);
},3000);
console.log("hello");
