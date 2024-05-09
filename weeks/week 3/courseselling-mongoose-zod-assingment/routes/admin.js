const { Router } = require("express")
const adminMiddleware = require("../middleware/admin")
const { Admin , Course } = require("../database/indexdb")
const router = Router();

router.post('/signup',(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    Admin.create({
        username:username,
        password:password
    }) 
    .then((value)=>{
        if(!value){
            res.status(403).json({
                msg:"sign up not successful"
            })
        }else{
            return value.save()
            .then(()=>{
                res.json({
                    msg: " admin created "
                })
            })
        }
    }).catch((e)=>{
        res.status(404).json({
            msg:"not sucessful"
        })
    })
})

router.post('/courses',adminMiddleware,(req,res)=>{
    const title = req.body.title 
    const description = req.body.description
    const imagelink = req.body.imagelink
    const price = req.body.price
    Course.create({
        title:title,
        description:description,
        imagelink:imagelink,
        price:price
    }).then((value)=>{
        if(value){
            res.json({
                msg:"course craeted"
            })
        }else{
            res.status(404).json({
                msg:"course not created"
            })
        }
    }).catch((e)=>{
        res.status(404).json({
            msg:"wrong inputs"
        })
    })
})

router.get("/courses",adminMiddleware,(req,res)=>{
    
    Course.find({})
    .then((value)=>{
        if(value){
            res.json({
                value
            })
        }else{
            res.status(404).json({
                msg:"error in  admin courses get"
            })
        }
    }).catch((e)=>{
        res.status(404).json({
            msg:" not authorised to view "
    })
})
})

module.exports= router ;