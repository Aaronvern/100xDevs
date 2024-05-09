function arithmetic(a,b,fun){
    ans= fun(a,b);
    console.log(ans);
}
function sum(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function main(){
    arithmetic(3,4,sub);
}
main();
