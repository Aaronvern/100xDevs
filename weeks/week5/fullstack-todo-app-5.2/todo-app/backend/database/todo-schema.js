const mongoose = require("mongoose")
const zod = require("zod")

mongoose.connect("mongodb+srv://aaronvernekar:m0End1zwCOHWxrL4@cluster0.sqhe0ak.mongodb.net/todos")


const todo = mongoose.model('todos',new mongoose.Schema({
    title:String,
    description:String,
    completed : Boolean
}))

module.exports = {
    todo
}