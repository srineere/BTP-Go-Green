const express = require("express");
const { check } = require("express-validator");
const router = express.Router();

const UserRoutes = require('../controller/userController')

router.post(
  "/",
  [
    check("name", "Name is a required field").not().isEmpty(),
    check("email", "Please enter a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
    UserRoutes.registerUser
);

module.exports = router;
