const { Router } = require('express');
const path = require('path');
const { products } = require('../controllers/products');
const { getProducts } = require('../controllers/products')

const router = Router();

router.get('/', getProducts);

module.exports = { home: router };
