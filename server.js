var express = require("express");

var bodyparser = require("body-parser");

var app = express();

var productAPI = require("./controllers/product.controller");
var customerAPI = require("./controllers/customer.controller");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded());

app.use("/api/products", productAPI);
app.use("/api/customers", customerAPI);

app.listen(8082);
console.log("Server up and running on port 8082");