const { Router } = require('express');
const router = Router();

router.get('/', (req, res, next) => {
  res.send('<h1>Hello Express!</h1>');
});

module.exports = { home: router };
