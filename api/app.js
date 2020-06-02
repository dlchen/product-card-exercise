const express = require('express');
const products = require('../src/products.json');

const app = express();

app.use(express.json());

app.get('/products', (req, res) => {
  return res.json(products);
});

// TODO: use data store to allow for multiple users
const favoritesData = [];

const addToFavorites = (variantId) => {
  favoritesData.push(variantId);
}

app.route('/products/favorites')
  .get((req, res) => {
    return res.json(favoritesData);
  })
  .post((req, res) => {

    // TODO: handle request validation
    // TODO: handle errors

    addToFavorites(req.body.variantId);
    return res.json(favoritesData);
  });

module.exports = app;
