const { Router }= require ("express");
const middleware = require("../middlewares/user");
const router = Router();
const { User }= require("../database/indexdb")
const { Course }=require("../database/indexdb");
const userMiddleware = require("../middlewares/user");

router.post("/signup",(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
        User.create({
        username:username,
        password:password
    }).then((value)=>{
        if(value){
            res.json({
                msg:"user created successfully"
            })
        }
    })
.catch((error)=>{
        res.status(411).json({
            msg:"user creation not successful"
        })
})
})

router.post("/signin",middleware,(req,res)=>{

})

router.get("/courses",middleware,(req,res)=>{

    Course.find({}).then((value)=>{
        res.json({
            courses: value
        })
    }).catch((error)=>{
        res.status(400).json({
            msg:"unable to get courses"
        })
    })
})

router.post("/Courses/:courseId",middleware,(req,res)=>{
    const username = req.body.username;
    const courseId = req.params.courseId;
    User.updateOne({
        username:username
    },{
        "$push":{
            purchasedCourses: courseId
        }
    }).then((response)=>{
        if(response){
            res.json({
                msg:"purchase successful"
            })
        }
    }).catch((error)=>{
        res.status(400).json({
            msg:"couldnt buy"
        })
    })    

})


router.get("/purchasedcourses",middleware,async (req,res)=>{
    const username = req.headers.username;
    const user = await User.findOne({
        username:username
    });
    console.log(user.purchasedCourses);
     Course.find({
        _id : {
            "$in":user.purchasedCourses
        }
    }).then((response)=>{
        res.json({
            courses:response
        })
    })
})


module.exports=router;

