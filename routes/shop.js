const { Router } = require('express');
const {
  getProducts,
  cart,
  getIndex,
  orders,
  getProduct,
  postCart,
} = require('../controllers/shop');

const router = Router();

router.get('/', getIndex);
router.get('/products', getProducts);
router.get('/products/:productId', getProduct);
router.get('/cart', cart);
router.post('/cart', postCart);
router.get('/orders', orders);
router.get('/checkout');

module.exports = { home: router };
