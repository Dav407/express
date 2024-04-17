
const express = require("express")
const fs = require("fs")
const app = express()
const port = 8000

const productRoute  = require("./routes/ProductRoute")

const home = fs.readFileSync("./pages/home.html", "utf-8")
// const about = fs.readFileSync("./pages/about.html", "utf-8")
// const product = fs.readFileSync("./pages/product.html", "utf-8")
// const test = fs.readFileSync("./pages/testimonial.html", "utf-8")
// const contact = fs.readFileSync("./pages/contact.html", "utf-8")

app.get( "/", (req, res) => {
    res.send(home)
} )

// app.get("/about", (req, res) => {
//     res.send(about)
// })
// app.get("/contact", (req, res) => {
//     res.send(contact)
// })
// app.get("/product", (req, res) => {
//     res.send(product)
// })
// app.get("/testimonial", (req, res) => {
//     res.send(test)
// })


// USING PRODUCT ROUTE
app.use(productRoute)
// SERVER WILL NOW HANDLE JS DATA
app.use(express.json())




app.listen( port, () => {
    console.log(`server started succesfully. click http://localhost:${port} to open website`)
})
