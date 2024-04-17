
const express = require("express");
const { getAllProducts, getSingleProducts, createPost, updatePost, deletePost } = require('../controllers/productController')

const router = express.Router();

// GET ALL PRODUCTS
router.get("/products", getAllProducts)


// GET SINGLE PRODUCTS
router.get("/products/:id", getSingleProducts)

// CREATE A PRODUCT
router.post("/products", createPost )


// UPDATING A PRODUCT
router.put("/products/:id", updatePost)

// DELETE A PRODUCT
router.delete("/products/:id", deletePost)





module.exports = router