const { Router } = require('express');
// const path = require('path');

const {
  getAddProduct,
  postAddProduct,
  getProducts,
  getEditProduct,
  postEditProduct,
  postDeleteProduct,
} = require('../controllers/admin');

const router = Router();

router.get('/new', getAddProduct);
router.get('/products', getProducts);
router.get('/edit-product/:productId', getEditProduct);
router.post('/add-product', postAddProduct);
router.post('/edit-product', postEditProduct);
router.post('/delete-product', postDeleteProduct);
module.exports = {
  adminRoutes: router,
};
