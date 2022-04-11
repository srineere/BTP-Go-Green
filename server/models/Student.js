const mongoose = require('mongoose');

const StudentSchema =  new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    roll_number:{
        type:String,
        required: true,
        unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    contact_number: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    year_of_joining: {
        type:Number,
        required: true
    }
})

module.exports = Student = mongoose.model("Student",StudentSchema)