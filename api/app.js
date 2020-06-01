const express = require('express');
const products = require('../src/products.json');

const app = express();

app.use(express.json());

app.get('/products', (req, res) => {
  return res.json(products.slice(0, 60));
});

const mockFavorites = [
  ...products.slice(0, 5).map((product) => product.variantId),
  ...products.slice(10, 15).map((product) => product.variantId)
];

const addToFavorites = (productId) => {
  mockFavorites.push(productId);
}

app.route('/products/favorites')
  .get((req, res) => {
    return res.json(mockFavorites);
  })
  .post((req, res) => {

    // TODO: handle request validation
    // TODO: handle errors

    addToFavorites(req.body.productId);
    return res.json(mockFavorites);
  });

module.exports = app;
