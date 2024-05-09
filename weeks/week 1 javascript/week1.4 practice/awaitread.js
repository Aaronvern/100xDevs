const fs = require('fs');

function read(){
    return new Promise( function (resolve){
        fs.readFile("a.txt","utf-8",function(err,data){
            resolve(data);
        })
    })
}
async function main(){
    let reader= await read();
    console.log(reader);
    console.log("hello from async fun");
}
console.log("no one wants me ")
main();