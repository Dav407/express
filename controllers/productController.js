



exports.getAllProducts =  (req, res) => {
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
}


exports.getSingleProducts = (req, res) => {
    res.status(200)
    res.json({
        productName: "Iphone 13",
        productPrice: "$1100"
    })
}


exports.createPost = (req, res) => {
    res.status(200)
    res.json({
        message: "product updated sucesfully"
    })
}


exports.updatePost = (req, res) => {
    res.status(200)
    res.json({
        message: "product created sucesfully"
    })
}

exports.deletePost = (req, res) => {
    res.status(200)
    res.json({
     message: "product deleted sucesfully"
    })
}
