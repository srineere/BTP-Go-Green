const Fees = require('../models/Fees')

const getAllFeeDetails = (req,res) => {
    Fees.find().sort()
    .then(result => {
        res.send(result)
    })
    .catch(e => console.log(e))
}

const getFeeDetail = (req,res) => {
    const id = req.params.id;
    Fees.findById(id)
    .then(result => {
        res.send(result)
    })
    .catch(e => console.log(e))

}

const addFeeDetails = (req,res) => {
    Fees.create(req.body,function (err, small) {
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

const deleteFeeDetails = (req,res) => {
    Fees.findByIdAndDelete(req.params.id)
    .then(result => {
        res.json(result)
    })
    .catch(e => console.log(e))
}

module.exports = { 
    getAllFeeDetails,
    getFeeDetail,
    addFeeDetails,
    editStudent,
    deleteFeeDetails
}