var express = require("express");

var bodyparser = require("body-parser");

var app = express();

var productAPI = require("./controllers/product.controller");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded())

app.use("/api/products", productAPI);

app.listen(8082);
console.log("Server up and running on port 8082");