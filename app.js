/* eslint-disable no-console */
const express = require('express');
const { urlencoded } = require('body-parser');

const path = require('path');
const { notFound } = require('./controllers/404');
const { adminRoutes } = require('./routes/admin');
const { home } = require('./routes/shop');


const port = 5000;
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public/')));
app.use('/admin', adminRoutes);
app.use(home);
// app.use((req, res, next) => {
//   res.status(404).sendFile(path.join(__dirname, 'views/', '404.html'));
// });
app.use(notFound);

app.listen(port);
console.log(`now listening on port ${port}`);
