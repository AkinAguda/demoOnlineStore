const { Router } = require('express');
const {
  getProducts,
  cart,
  getIndex,
  orders,
} = require('../controllers/shop');

const router = Router();

router.get('/', getIndex);

router.get('/products', getProducts);
router.get('/cart', cart);
router.get('/orders', orders);
router.get('/checkout');

module.exports = { home: router };
