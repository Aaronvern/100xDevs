const users=[{
    fname:"aaron",
    gender:"male"
},{
    fname:"sohan",
    gender:"male"
},{
    fname:"ana",
    gender:"female"
},
];
for( let i=0;i<users.length;i++){
    if(users[i]["gender"]==="male"){
        console.log(users[i]["fname"]);
    }
}