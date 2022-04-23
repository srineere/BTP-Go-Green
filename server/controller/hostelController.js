const Hostel = require('../models/Hostel')

const getAllHostelDetails = (req,res) => {
    Hostel.find().sort()
    .then(result => {
        res.send(result)
    })
    .catch(e => console.log(e))
}

const getOneStudentHostel = (req,res) => {
    const id = req.params.id;
    Hostel.findById(id)
    .then(result => {
        res.send(result)
    })
    .catch(e => console.log(e))

}

const addStudentHostel = (req,res) => {
    Hostel.create(req.body,function (err, small) {
        if (err) return handleError(err);
    })
}

const editStudentHostel = (req,res) => {
    Hostel.findByIdAndUpdate(req.params.id, req.body)
    .then(result => {
        res.json(result)
    .catch(e => console.log(e))
    })
}

const deleteStudentHostel = (req,res) => {
    Hostel.findByIdAndDelete(req.params.id)
    .then(result => {
        res.json(result)
    .catch(e => console.log(e))
    })
}

module.exports = { 
    getAllHostelDetails,
    getOneStudentHostel,
    addStudentHostel,
    editStudentHostel,
    deleteStudentHostel
}