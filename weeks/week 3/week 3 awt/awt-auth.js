const express=require("express")
const jwt = require("jsonwebtoken")
const jwtpassword = "123456";
const port = 3000;
const app=express();

app.use(express.json());

const users=[{
  username:"aaron",
  password:"123456",
  email:"aaron@gmail.com"
},{
  username:"sohan",
  password:"1111",
  email:"sohan@gmail.com"
},{
  username:"umam",
  password:"12345678",
  email:"umam@gmail.com"
}];

function authCheck(username,password){
  let pass=false;
  for(let i =0 ; i<users.length;i++){
    if(users[i].username==username){
      pass=true;
    }
  }
  return pass;
}
function primeauth(req,res,next){
  const username=req.body.username;
  const password=req.body.password;
  const userExists=authCheck(username,password);
  if(!userExists){
    
  }


}
app.post('/login',(req,res)=>{
  
  if(!userExists){
    
    res.status(403).json({
      msg:"user not present"
    })
    return;
  }
  const response=jwt.sign({username:username},jwtpassword);
  res.json({
    response
  })
})
app.get('/users',(req,res)=>{
  const auth=req.headers.authorization;
  try{
    const decoded =jwt.verify(auth,jwtpassword);
    const username=decoded.username;
    const print = users.filter((value)=>{
      if(value.username==username){
        return false;
      }
      return true
    })
    res.json({
      print
    })
  }catch(err){
    res.status(400).json({
      msg:"uiser not present"
    })
  }
})

app.use((err,req,res,next)=>{
  res.json({
    msg:"server down"
  })
})

app.listen(port,()=>{
  console.log("lsiteniong on port "+port)
})