const mongoose = require('mongoose')

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
            name:{
                type: String,
                required: true,
                trim: true
            },
            email:{
                type: String,
                required: true,
                unique: true,
                trim: true
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