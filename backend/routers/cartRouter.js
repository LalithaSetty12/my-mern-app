const express=require("express");
const router=express.router();
const{AddToCart,RemovecartProduct}=require("../controllers/CartController");
const (isuser)=require("../middleware/userRoleAuth")
router.post("/add-cart",isuser,AddToCart)
router.delete("/remove-cart-product",isuser,RemovecartProduct)
module.exports=router