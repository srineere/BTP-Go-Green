const express = require("express");
const router = express.Router();


const leaveStudentRoutes = require('../controller/leaveStudentController')


router.post('/', leaveStudentRoutes.addLeaveStudent);


module.exports = router