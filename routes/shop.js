const { Router } = require('express');
const path = require('path');
const { product } = require('./admin');

const router = Router();

router.get('/', (req, res, next) => {
  console.log(product);
  // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
  res.render('shop', { prods: product, pageTitle: 'SHOP', path: '/' });
});

module.exports = { home: router };
