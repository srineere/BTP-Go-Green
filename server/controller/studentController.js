const Student = require('../models/Student')

const getAllStudents = (req,res) => {
    Student.find().sort()
    .then(result => {
        res.send(result)
    })
    .catch(e => console.log(e))
}

const getOneStudent = (req,res) => {
    const id = req.params.id;
    Student.findById(id)
    .then(result => {
        console.log(result)
        res.send(result)
    })
    .catch(e => console.log(e))

}

const addStudent = (req,res) => {
    Student.create(req.body,function(err,result){
        if(err){
            console.log(err)
            res.send(err)
        } 
        else res.json(result)
    })
}

const editStudent = (req,res) => {
    Student.findByIdAndUpdate(req.params.id, req.body)
    .then(result => {
        res.json(result)
    })
    .catch(e => console.log(e))
}

const deleteStudent = (req,res) => {
    Student.findByIdAndDelete(req.params.id)
    .then(result => {
        res.json(result)
    })
    .catch(e => console.log(e))
}

module.exports = { 
    getAllStudents,
    getOneStudent,
    addStudent,
    editStudent,
    deleteStudent
}