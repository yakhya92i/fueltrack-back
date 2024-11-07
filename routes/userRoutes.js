const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController")
const { authenticateToken } = require("../controllers/Auth"); 
const Auth = require("../controllers/Auth")


const jwt = require("jsonwebtoken");

router.post("/create-account", userController.newUser);

router.post("/login",  userController.existingUser);


//Authentication with JWT
router.post("/signup", Auth.signUP);
router.post("/signin", Auth.signIn);

//router.get("/get-user", authenticateToken, userController.isUser);

module.exports = router;