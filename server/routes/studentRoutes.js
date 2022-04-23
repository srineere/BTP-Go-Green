const express = require("express");
const router = express.Router();

const Student_Routes = require('../controller/studentController')

router.get('/', Student_Routes.getAllStudents);
router.get('/:id',Student_Routes.getOneStudent)
router.post('/',Student_Routes.addStudent)
router.post('/edit/:id',Student_Routes.editStudent)
router.delete('/:id',Student_Routes.deleteStudent)

module.exports = router