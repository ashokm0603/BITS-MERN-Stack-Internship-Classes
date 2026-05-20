const addProducts=require("../controller/productController");
const verifyToken=require("../middleware/verifyToken")
const isAdmin=require("../middleware/authAdmin")
const express=require("express");
const router=express.Router();

router.post("/add-products",verifyToken, isAdmin, addProducts);


module.exports=router;