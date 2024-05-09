const arr=[1,2,3,4,5,6,7,8,9];
let temp=0;
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length-1-i;j++){
        if(arr[j]<arr[j+1]){
        temp=arr[j];
        arr[j]=arr[j+1];
        arr[j+1]=temp;
        }
    }
}
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

