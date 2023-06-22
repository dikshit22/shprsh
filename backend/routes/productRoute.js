const express=require("express");
const { getAllProducts, createProduct,updateProduct,deleteProduct,getProduct, createProductReview, getProductReviews, deleteReview} = require("../controllers/productController.js");
const {isAuthenticatedUser,authorizeRoles}=require("../middleware/auth.js");
const router=express.Router();

router.route("/products").get(getAllProducts);
router.route("/product/new").post(isAuthenticatedUser,authorizeRoles("admin"),createProduct);
router.route("/product/:id").put(isAuthenticatedUser,authorizeRoles("admin"),updateProduct).delete(isAuthenticatedUser,deleteProduct).get(getProduct);
router.route("/review").put(isAuthenticatedUser,createProductReview);
router.route("/reviews").get(getProductReviews).delete(isAuthenticatedUser,deleteReview);
module.exports=router