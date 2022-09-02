const express = require("express");
const app = express();
const product = require("./productsRouter");
const cors = require("cors");

app.use(cors());
app.use(express.json());


app.use("/api/products", product);

app.listen(4000);
