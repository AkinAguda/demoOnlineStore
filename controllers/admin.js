const Product = require('../models/products');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/add-product', {
    pageTitle: 'Add Products',
    path: '/admin/new',
  });
};

exports.postAddProduct = (req, res, next) => {
  const {
    title, url, description, price,
  } = req.body;
  const product = new Product(title, url, description, price);
  product.save();
  res.redirect('/');
};

exports.getProducts = async (req, res, next) => {
  const products = await Product.fetchAll();
  res.render('admin/products', {
    prods: products,
    pageTitle: 'Products (Admin)',
    path: '/admin/products',
  });
};
