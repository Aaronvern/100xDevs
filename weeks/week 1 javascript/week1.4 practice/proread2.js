const fs= require('fs');
function aaronsRead(){
    return new Promise(function(res){
        fs.readFile("a.txt","utf-8",function (err,data){
            if(err){
                console.error("all the best solving the bug");
                return;
            }
            res(data);
        });
    });
}
function printer(data){
    console.log(data);
}
const a= aaronsRead();
console.log(a);
a.then(printer);