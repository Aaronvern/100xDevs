const fs= require('fs');
function read(callback){
        fs.readFile("a.txt","utf-8",function(err,data){
        callback(data);
    });
}
function onDone(dat){
    console.log(dat);
}
read(onDone);
console.log("hello");
