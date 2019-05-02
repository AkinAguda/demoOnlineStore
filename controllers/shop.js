const Product = require('../models/products');


exports.getProducts = async (req, res, next) => {
  const products = await Product.fetchAll();
  res.render('shop/product-list', {
    prods: products,
    pageTitle: 'SHOP',
    path: '/',
  });
};

exports.getIndex = async (req, res, next) => {
  const products = await Product.fetchAll();
  res.render('shop/index', {
    prods: products,
    pageTitle: 'Welcome!',
    path: '/',
  });
};

exports.cart = (req, res, next) => {
  res.render('shop/cart', {
    pageTitle: 'Cart',
    path: '/cart',
  });
};

exports.orders = (req, res, next) => {
  res.render('shop/orders', {
    pageTitle: 'Your Orders',
    path: '/orders',
  });
};
