const mongoose = require('mongoose')
const Faculty = require('./Faculty')

const CoursesSchema = new mongoose.Schema({
    Course_Name :{
        type: String,
        required: true,
        trim: true
    },
    Course_Code : {
        type:String,
        required: true,
        unique: true
    },
    Faculty: [
        {
            faculty: {
                type: mongoose.Schema.Types.ObjectId,
                ref:Faculty
            }
        }
    ],
    Students: [
        {
            student: {
                type:mongoose.Schema.Types.ObjectId,
                ref:"Student"
            }
        }
    ]
})

module.exports = Courses = mongoose.model("Courses",CoursesSchema)