function fun1(a){
    let sum=0;
    for (i=0 ; i<10;i++){
        a=a+i;
    }
    return a;
}
setTimeout(function(){
    console.log(fun1(10));
}, 3000);
console.log("hello");
