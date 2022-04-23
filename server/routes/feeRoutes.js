const express = require("express");
const router = express.Router();

const FeeRoutes = require('../controller/feeController')

router.get('/', FeeRoutes.getAllFeeDetails);
router.get('/:id',FeeRoutes.getFeeDetail)
router.post('/',FeeRoutes.addFeeDetails)
router.post('/edit/:id',FeeRoutes.editStudent)
router.delete('/:id',FeeRoutes.deleteFeeDetails)

module.exports = router