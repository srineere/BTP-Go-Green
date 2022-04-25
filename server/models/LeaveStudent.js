const mongoose = require('mongoose')

const LeaveStudentSchema = new mongoose.Schema({
    Student: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Student"
    },
    StartDate: {
        type:Date,
        required:true
    },
    EndDate: {
        type:Date,
        required:true,
    },
    Reason: {
        type:String,
        required:true,
    },
    TypeOfLeave:{
        type:String,
        required:true
    }
    
})

module.exports = LeaveStudent = mongoose.model("LeaveStudent",LeaveStudentSchema)