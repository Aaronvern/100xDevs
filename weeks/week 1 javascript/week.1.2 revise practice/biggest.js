const arr=[10,20,30,40,50,60,40,20];
let big=0;
for(let i=0;i<arr.length;i++){
    if(big<arr[i]){
        big=arr[i];
    }
}
console.log(big);
