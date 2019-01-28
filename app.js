/* eslint-disable no-console */
const express = require('express');
const { urlencoded } = require('body-parser');
const { adminRoutes } = require('./routes/admin');
const { home } = require('./routes/shop');

const port = 4000;
const app = express();

app.use(urlencoded({ extended: false }));
app.use(adminRoutes);
app.use(home);

app.listen(port);
console.log(`now listening on port ${port}`);
