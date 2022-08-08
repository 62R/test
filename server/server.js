const express = require("express");
const app = express();
const product = require("./productsRouter");

app.use(express.json());
app.use("/", express.static("dist"));

app.use("/api/products", product);

app.listen(4000);
