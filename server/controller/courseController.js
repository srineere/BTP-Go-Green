const Course = require('../models/Courses')

const getAllCourses = (req,res) => {
    Course.find().sort()
    .then(result => {
        res.send(result)
    })
    .catch(e => console.log(e))
}

const getOneCourse = (req,res) => {
    const id = req.params.id;
    Course.findById(id)
    .then(result => {
        res.send(result)
    })
    .catch(e => console.log(e))

}

const addCourse = (req,res) => {
    Course.create(req.body,function (err, small) {
        if (err) return handleError(err);
    })
}

const editCourse = (req,res) => {
    Course.findByIdAndUpdate(req.params.id, req.body)
    .then(result => {
        res.json(result)
    .catch(e => console.log(e))
    })
}

const deleteCourse = (req,res) => {
    Course.findByIdAndDelete(req.params.id)
    .then(result => {
        res.json(result)
    .catch(e => console.log(e))
    })
}

module.exports = { 
    getAllCourses,
    getOneCourse,
    addCourse,
    editCourse,
    deleteCourse
}