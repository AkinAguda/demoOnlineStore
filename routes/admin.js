const { Router } = require('express');
// const path = require('path');

const { getAddProduct, postAddProduct, getProducts } = require('../controllers/admin');

const router = Router();

router.get('/new', getAddProduct);
router.get('/products', getProducts);

router.post('/add-product', postAddProduct);

module.exports = {
  adminRoutes: router,
};
