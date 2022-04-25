const mongoose = require('mongoose');

const FacultySchema =  new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
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
    }
})

module.exports = Faculty = mongoose.model("Faculty",FacultySchema)