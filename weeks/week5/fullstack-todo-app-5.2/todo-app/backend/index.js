const express = require ("express")
const app = express()
const bodyParser = require("body-parser")
const port = 3000;
const { createTodo , updateTodo }= require("../backend/types")
const { todo } = require("../backend/database/todo-schema")
const cors  = require("cors")
app.use(express.json())
app.use(cors());

//to add todo
app.post("/todo",(req,res)=>{
    //getting inputs from the frontend
    const createPayload= req.body;
    //validating the inouts using zod
    const parsedPayload = createTodo.safeParse(createPayload)
    if(!parsedPayload){
        res.status(400).json({
            msg:"wrong inputs"
        })
        return
    }
    //storing inputs in database
    todo.create({
        title : createPayload.title,
        description : createPayload.description,
        completed : false
    }).then(()=>{
        res.json({
            msg:"todo created"
        })
    })
})



//to get existing todos
app.get("/todos",async (req,res)=>{
    const todos = await todo.find({})
    res.json({
        todos
    })
})



//to mark completed todo
app.put("/completed",async (req,res)=>{

    const createPayload= rq.body;
    const parsedPayload = updateTodo.safeParse(createPayload)
    if(!parsedPayload){
        res.status(400).json({
            msg:"wrong inputs"
        })
        return 
    }
    
    await todo.update({
      _id : req.body.id  
    },{
        completed : true
    })

    res.json({
        msg:"marked as done"
    })

})




app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})

