
const btime= new Date();
let a=0;
const before= btime.getTime(); 
console.log(before);
function fun(){
    for(let i=0 ; i<=900000000 ; i++){
        a=a+i;
    }
}
fun();
const atime= new Date();
const after=atime.getTime();

console.log(after);
console.log("time taken:  "+(after-before)/1000);