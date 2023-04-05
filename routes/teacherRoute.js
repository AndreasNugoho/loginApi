const express = require("express");
const router = express.Router();
const {getAllTeacher}  = require("../controllers/teacherControllers");

router.get("/", getAllTeacher);

module.exports = router;