const Product = require('../models/products');
const Cart = require('../models/cart');

exports.getProducts = async (req, res) => {
  const products = await Product.fetchAll();
  res.render('shop/product-list', {
    prods: products,
    pageTitle: 'SHOP',
    path: '/products',
  });
};

exports.getProduct = async (req, res) => {
  const { productId } = req.params;
  const product = await Product.findById(productId);
  res.render('shop/product-detail', {
    pageTitle: `Details for ${product.title}`,
    path: '/products',
    product,
  });
};

exports.getIndex = async (req, res) => {
  const products = await Product.fetchAll();
  res.render('shop/index', {
    prods: products,
    pageTitle: 'Welcome!',
    path: '/',
  });
};

exports.cart = (req, res) => {
  res.render('shop/cart', {
    pageTitle: 'Cart',
    path: '/cart',
  });
};

exports.postCart = async (req, res) => {
  const { productId } = req.body;
  const product = await Product.findById(productId);
  Cart.addProduct(productId, product.price);
  res.redirect('/cart');
};

exports.orders = (req, res) => {
  res.render('shop/orders', {
    pageTitle: 'Your Orders',
    path: '/orders',
  });
};
