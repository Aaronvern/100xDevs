const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://aaronvernekar:cavansny@cluster0.sqhe0ak.mongodb.net/course-seller-app')

const AdminSchema = new mongoose.Schema({
    username:String,
    password:String
})
const UserSchema = new mongoose.Schema({
    username:String,
    password:String,
    purchasedCourses:{
        type : mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }
})
const CourseSchema = new mongoose.Schema({
    title: String,
    description:String,
    imagelink:String,
    price:Number
})

const Admin = mongoose.model('Admin',AdminSchema)
const User = mongoose.model('User',UserSchema)
const Course = mongoose.model('Course',CourseSchema)

module.exports={
    Admin,
    User,
    Course
};
