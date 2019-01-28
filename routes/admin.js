const { Router } = require('express');

const router = Router();
router.get('/new', (req, res, next) => {
  res.send('<form action="/product" method="POST"><input type="text" name="item"><br><input type="submit"></form>');
});

router.post('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = { adminRoutes: router };
