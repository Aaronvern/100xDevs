function name1(a,b,fnToCall){
    const sum=a+b;
    fnToCall(sum);
}
function display(s){
    console.log(s+"is the sum");
}
name1(1,2,display);