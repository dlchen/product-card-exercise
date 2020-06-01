const express = require('express');
const products = require('../src/products.json');

const app = express();

app.get('/products', (req, res) => {
  return res.json(products);
});

app.get('/products/favorites', (req, res) => {
  return res.json(products.slice(-10));
});

module.exports = app;
