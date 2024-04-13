const express = require('express');
const { getAllProducts, getProduct, addProduct, updateProduct, deleteProduct } = require('../controller/product.controller');
const route = express.Router();

//for all products
route.get('/', getAllProducts);

//for single product
route.get('/:id',getProduct);

//post data
route.post('/', addProduct)

//update product
route.put('/:id', updateProduct)

//delete product
route.delete('/:id', deleteProduct)

module.exports = route;