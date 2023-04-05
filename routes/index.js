const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userControllers")
const TeacherController = require("../controllers/teacherControllers")
const auth = require("../middleware/authentication");

router.post("/login", UserController.login)
router.use(auth);
router.get("/teachers",TeacherController.getAllTeacher)
module.exports = router;