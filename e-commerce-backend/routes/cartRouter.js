const express=require("express");
const router=express.Router();

const {addToCart}=require("../controller/cartController");
const isUser=require("../middleware/authUser")
router.post("/add-cart",isUser,addToCart);

module.exports=router;