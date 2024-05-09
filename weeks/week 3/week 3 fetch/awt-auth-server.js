const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();

const ALL_USERS = [
  {
    username: "aaron@gmail.com",
    password: "123456",
    name: "aaron peter",
  },
  {
    username: "sohan@gmail.com",
    password: "098765",
    name: "sohan dsouza",
  },
  {
    username: "alien@gmail.com",
    password: "111111",
    name: "alien",
  },
];

function userExists(username, password) {
    let userExists = false;
    for (let i = 0; i <ALL_USERS.length;i++){
        if(ALL_USERS[i].username==username){
            userExists = true;
        }
    }
    return userExists;
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, "shhhhh");
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    res.json({
        ALL_USERS
       });
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000,function (){
    console.log("listening on port "+3000)
})