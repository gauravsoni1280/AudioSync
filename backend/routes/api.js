// routes/api.js
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

// Fetch User Data Endpoint
router.get('/fetchUserData', authMiddleware, userController.getUserProfile);
router.post('/createUser', authMiddleware, userController.createUser);

module.exports = router;
