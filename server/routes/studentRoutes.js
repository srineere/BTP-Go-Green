const express = require("express");
const router = express.Router();

const Student_Routes = require('../controller/studentController')

router.get('/', Student_Routes.get_all_students)
router.get('/:id',Student_Routes.get_one_student)
router.post('/',Student_Routes.add_student)
router.delete('/:id',Student_Routes.delete_student)

module.exports = router