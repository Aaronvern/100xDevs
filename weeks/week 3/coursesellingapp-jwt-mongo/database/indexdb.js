const mongoose = require ("mongoose");
mongoose.connect("mongodb+srv://aaronvernekar:m0End1zwCOHWxrL4@cluster0.sqhe0ak.mongodb.net/course-selling-app")

const AdminSchema =new mongoose.Schema({
    username: String,
    password: String,

})

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    purchasedCourses:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'course'
    }]
})

const CourseSchema = new mongoose.Schema({
    title:String,
    description:String,
    price:Number,
    imgLink:String
})

const Admin = mongoose.model('Admin',AdminSchema)
const User = mongoose.model('User',UserSchema)
const Course = mongoose.model('Course',CourseSchema)

module.exports = { 
    
    Admin,
    User,
    Course
}