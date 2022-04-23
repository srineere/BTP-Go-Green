const express = require("express");
const router = express.Router();

const HostelRoutes = require('../controller/hostelController')

router.get('/', HostelRoutes.getAllHostelDetails);
router.get('/:id', HostelRoutes.getOneStudentHostel);
router.post('/', HostelRoutes.addStudentHostel);
router.post('/edit/:id', HostelRoutes.editStudentHostel);
router.delete('/:id', HostelRoutes.deleteStudentHostel);

module.exports = router