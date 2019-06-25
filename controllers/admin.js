const Product = require('../models/products');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Products',
    path: '/admin/new',
    editing: false,
  });
};

exports.postEditProduct = (req, res, next) => {
  const {
    productId,
    title,
    url,
    price,
    description,
  } = req.body;
  const updatedProd = new Product(productId, title, url, description, price);
  updatedProd.save();
  res.redirect('/admin/products');
};

exports.postAddProduct = (req, res, next) => {
  const {
    title, url, description, price,
  } = req.body;
  const product = new Product(null, title, url, description, price);
  product.save();
  res.redirect('/');
};

exports.getEditProduct = async (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const { productId } = req.params;
  const product = await Product.findById(productId);
  if (!product) {
    return res.redirect('/');
  }
  res.render('admin/edit-product', {
    pageTitle: 'Add Products',
    path: '/admin/edit-product',
    editing: editMode,
    product,
  });
};

exports.getProducts = async (req, res, next) => {
  const products = await Product.fetchAll();
  res.render('admin/products', {
    prods: products,
    pageTitle: 'Products (Admin)',
    path: '/admin/products',
  });
};

exports.postDeleteProduct = async (req, res, next) => {
  const { productId } = req.body;
  await Product.delete(productId);
  res.redirect('/admin/products');
};
