const express =require("express")
const router = express.Router();
const {
    addProduct,
    productDetails,
    updateProducts,
    deleteProduct,
    getProductBasedOnPrice,
    getProductBasedOnBrand,
    getLimitedProducts
} = require("../controllers/ProductController");
router.post("/add-product",addProduct);
router.get("/product-details",productDetails);
router.put("/update-product/:id",updateProducts);
router.delete("/delete-product/:id",deleteProduct);
router.get("/get-product-based-on-price",getProductBasedOnPrice);
router.get("/get-product-based-on-brand",getProductBasedOnBrand);
router.get("/get-limited-products",getLimitedProducts);

module.exports=router;