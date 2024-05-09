const { Router } = require ("express");
const middleware = require ("../middlewares/admin");
const router = Router();
const { Admin , Course } = require ("../database/indexdb")

router.post("/signup",(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
        Admin.create({
        username:username,
        password:password
    }).then((value)=>{
        if(value){
            res.json({
                msg:"admin created successfully"
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

router.post("/courses",middleware,(req,res)=>{
    const username = req.header.username;
    const password = req.header.password;

    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imglink = req.body.imglink;
    
    Course.create({
        title: title,
        description:description,
        price:price,
        imglink:imglink
    }).then((value)=>{
        res.json({
            msg:"course created sucessfully",
            courseId : value._id
         })
    }).catch((Error)=>{
        res.status(400).json({
            msg:"course not created"
        })
    })
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

module.exports = router;