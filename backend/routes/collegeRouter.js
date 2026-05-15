const {addCollege,getAllColleges} = require("../controller/collegeController");

const express=require("express");
const router=express.Router()

router.post("/add-college",addCollege);
router.get("/get-colleges",getAllColleges);

module.exports=router;

