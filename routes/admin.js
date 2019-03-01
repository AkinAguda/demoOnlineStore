const { Router } = require('express');
const path = require('path');

const router = Router();
const products = [];
// router.get('/new', (req, res, next) => {
//   res.sendFile(path.join(__dirname, '../', 'views/', 'add-product.html'));
// });

router.get('/new', (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Products',
    path: '/admin/new',
  });
});

router.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect('/');
});

module.exports = {
  adminRoutes: router,
  product: products,
};
