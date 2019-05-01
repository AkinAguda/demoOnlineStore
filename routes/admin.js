const { Router } = require('express');
// const path = require('path');

const { getAddProduct, postAddProduct } = require('../controllers/products');

const router = Router();
// router.get('/new', (req, res, next) => {
//   res.sendFile(path.join(__dirname, '../', 'views/', 'add-product.html'));
// });

router.get('/new', getAddProduct);

router.post('/add-product', postAddProduct);

module.exports = {
  adminRoutes: router,
};
