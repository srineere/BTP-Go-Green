const express = require("express");
const router = express.Router();

const HostelRoutes = require('../controller/hostelController')

router.get('/', HostelRoutes.getAllHostels);
router.get('/:id', HostelRoutes.getOneHostel);
router.post('/', HostelRoutes.addHostel);
router.post('/edit/:id', HostelRoutes.editHostel);
router.delete('/:id', HostelRoutes.deleteHostel);

module.exports = router