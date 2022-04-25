const express = require("express");
const { check} = require("express-validator");
const router = express.Router();

const auth = require('../middleware/auth')
const Auth_Routes = require("../controller/authController");

router.get("/", auth, Auth_Routes.getUser);
router.post( "/",
  [
    check("email", "Email is required").not().isEmpty(),
    check("password", "Password is required").not().isEmpty(),
  ],
  Auth_Routes.loginUser
);

module.exports = router;
