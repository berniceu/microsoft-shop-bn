const express = require('express');
const { readProduct, getAllProducts } = require("../controllers/product.controller");

const router = express.Router();

router.get('/getAllProducts', getAllProducts);
router.get('/readProduct/:id', readProduct);

module.exports = router;