const LeaveFaculty = require("../models/LeaveFaculty")
//post

const addLeaveFaculty = (req,res) => {
    LeaveFaculty.create(req.body,function (err) {
        if(err){
            console.log(err)
            res.send(err)
        } 
        else res.json(result)
    })
}
 module.exports = {
    addLeaveFaculty 
 }