
const express = require("express");


const router = express.Router();

// GET ALL PRODUCTS
router.get("/products", (req, res) => {
    res.status(200)
    res.json([
        {
            productName: "Iphone 15",
            productPrice: "$1300"
        },
        {
            productName: "Iphone 14",
            productPrice: "$1200"
        },
        {
            productName: "Iphone 13",
            productPrice: "$1100"
        }
    ])
})


// GET SINGLE PRODUCTS
router.get("/products/:id", (req, res) => {
    res.status(200)
    res.json({
        productName: "Iphone 13",
        productPrice: "$1100"
    })
})

// CREATE A PRODUCT
router.post("/products", (req, res) => {
    res.status(200)
    res.json({
        message: "product added sucesfully"
    })
})


// UPDATING A PRODUCT
router.put("/products/:id", (req, res) => {
    res.status(200)
    res.json({
        message: "product updated sucesfully"
    })
})

// DELETE A PRODUCT
router.delete("/products/:id", (req, res) => {
    res.status(200)
    res.json({
     message: "product deleted sucesfully"
    })
})





module.exports = router