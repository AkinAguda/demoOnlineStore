const Product = require('../models/products');

exports.getAddProduct = (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Products',
    path: '/admin/new',
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
};

exports.getProducts = async (req, res, next) => {
  const products = await Product.fetchAll();
  res.render('shop', { prods: products, pageTitle: 'SHOP', path: '/' });
};
