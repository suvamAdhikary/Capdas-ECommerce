const express = require("express");

const app = express();

app.use(express.json());

module.exports = app;

const productController = require("./controllers/product.controller");
app.use("/products", productController);
