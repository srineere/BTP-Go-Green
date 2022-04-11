const Student = require('../models/Student')

const get_all_students = (req,res) => {
    Student.find().sort()
    .then(result => {
        res.send(result)
    })
    .catch(e => console.log(e))
}

const get_one_student = (req,res) => {
    const id = req.params.id;
    Student.findById(id)
    .then(result => {
        res.send(result)
    })
    .catch(e => console.log(e))

}

const add_student = (req,res) => {
    Student.create(req.body,function (err, small) {
        if (err) return handleError(err);
    })
}

const delete_student = (req,res) => {
    Student.findByIdAndDelete(req.params.id)
    .then(result => {
        res.json(result)
    .catch(e => console.log(e))
    })
}

module.exports = { 
    get_all_students,
    get_one_student,
    add_student,
    delete_student
}