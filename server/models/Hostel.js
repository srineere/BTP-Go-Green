const mongoose = require('mongoose')

const HostelSchema = new mongoose.Schema({
    Block :{
        type:String,
        required:true,
        trim: true,
        unique:true
    },
    Room_Number:{
        type:Number,
        required:true,
    },
    Student: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Student"
    }
})

module.exports = Hostel = mongoose.model("Hostel",HostelSchema)