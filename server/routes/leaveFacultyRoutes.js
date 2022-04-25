const express = require("express");
const router = express.Router();


const leaveFacultyRoutes = require('../controller/leaveFacultyController')


router.post('/', leaveFacultyRoutes.addLeaveFaculty);


module.exports = router