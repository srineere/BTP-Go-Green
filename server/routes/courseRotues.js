const express = require("express");
const router = express.Router();

const CourseRoutes = require('../controller/courseController')

router.get('/', CourseRoutes.getAllCourses);
router.get('/:id',CourseRoutes.getOneCourse)
router.post('/',CourseRoutes.addCourse)
router.post('/edit/:id',CourseRoutes.editCourse)
router.delete('/:id',CourseRoutes.deleteCourse)

module.exports = router