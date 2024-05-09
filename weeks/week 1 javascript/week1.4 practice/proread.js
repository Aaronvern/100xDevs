const fs= require('fs');

function read(){
    return new Promise(function (resolve){
        fs.readFile("a.txt","utf-8",function(err,data){
             resolve(data);
        })
    })
}
function wait(){
    return new Promise(function (resolve){
        setTimeout(function (){
            resolve("hello from timer");
        },3000);

    })
}

async function main(){
    let a = await read();
    let b = await wait();
    console.log("in main");
    console.log(a);
    console.log(b);
}
console.log("hello");
main();