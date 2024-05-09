const ob={
    name: "aaron",
    surname: "peter"
};
const nstring = JSON.stringify(ob);
console.log(nstring);
const pstring= JSON.parse(nstring);
console.log(pstring["name"]);

console.log(ob.hasOwnProperty("name"));
let as= Object.assign({},ob,{roll: 1});
console.log(as);
const obj1= new Object();
const as1= Object.assign({},as,{class: 1});
console.log(as1);