//write a programe to print all the even number in an array
const arr=[1,2,3,4,5,6,7,8,9];
for(i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        console.log(arr[i]+"is even")
    }
    else{
        console.log(arr[i]+"is odd");
    }
}


//write a programe to find biggest element in the array
let temp=0;
let n=0;
for(i=0;i<=arr.length;i++){
    if(arr[i]>temp){
        temp=arr[i];
    }
}
console.log(temp);

//wrte a programe to sort a person according to their gender using complex objects
const  perso=[{
    firstname:"aaron",
    gender:"male"
},{
    firstname:"kitty",
    gender:"female"
}];
for(i=0;i<=perso.length; i++){
    if(perso[i]['gender'] ==  "male" ){
        console.log(perso[i]['firstname']+"is a boy");
    }
    else{
        console.log(perso[i]['firstname']+"is a girl");
    }
}