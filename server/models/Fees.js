const mongoose = require('mongoose')

const FeesSchema = new mongoose.Schema({
    Student: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Student"
    },
    
    Academic_Fee: {
        type: Number,
        required: true
    },
    Hostel_Fee: {
        type:Number,
        required:true
    },
    Mess_Fee: {
        type:Number,
        required:true
    },
    
    Academic_Fee_Paid: {
        type: Number,
        required: true
    },
    Hostel_Fee_Paid: {
        type:Number,
        required:true
    },
    Mess_Fee_Paid: {
        type:Number,
        required:true
    },
    
    Academic_Fee_Due: {
        type: Number,
        required: true
    },
    Hostel_Fee_Due: {
        type:Number,
        required:true
    },
    Mess_Fee_Due: {
        type:Number,
        required:true
    },
    
    Total_Amount_Due: {
        type:Number,
        required:true
    }
    
})

module.exports = Fees = mongoose.model("Fees",FeesSchema)