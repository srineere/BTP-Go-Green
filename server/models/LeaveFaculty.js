const mongoose = require('mongoose')

const LeaveFacultySchema = new mongoose.Schema({
    Faculty: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Faculty"
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

module.exports = LeaveFaculty = mongoose.model("LeaveFaculty",LeaveFacultySchema)