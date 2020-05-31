const express = require('express');
const products = require('../src/products.json');

const app = express();

app.get('/products', (req, res) => {
  return res.json(products);
});

module.exports = app;
