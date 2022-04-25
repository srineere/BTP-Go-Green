const LeaveStudent = require("../models/LeaveStudent")
//post

const addLeaveStudent = (req,res) => {
    LeaveStudent.create(req.body,function (err) {
        if(err){
            console.log(err)
            res.send(err)
        } 
        else res.json(result)
    })
}
 module.exports = {
    addLeaveStudent 
 }