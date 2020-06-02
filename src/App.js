import React, { useState, useEffect } from 'react';
import './App.css';
import Products from './Products';
import Filters from './Filters';

/**
 * Fetches resource and converts response to json
 * @param url - url passed to fetch api
 * @param {object} options - options passed to fetch api
 */
const fetchJson = async (url, options) => {
  try {
    const response = await fetch(url, options);
    const json = await response.json();
    return json;
  }
  catch (error) {
    console.error(`Error fetching ${url}`, error);
  };
}

/**
 * Hydrates state from API
 * @param {function} setProducts - useState setter for products
 * @param {function} setFavorites - useState setter for favorites
 */
const hydrateState = async (setProducts, setFavorites) => {
  const [products, favorites] = await Promise.all([fetchJson('/products'), fetchJson('/products/favorites')])
  setProducts(products);
  setFavorites(new Set(favorites));
}

/**
 * Handles async addToFavorites, consumed by Favorite onClick
 */
const addToFavorites = (setFavorites) => (product) => {

  (async () => {
    const favorites = await fetchJson('/products/favorites', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ variantId: product.variantId })
    });
    setFavorites(new Set(favorites));
  })();
};

const App = () => {

  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState(new Set());

  useEffect(() => {
    hydrateState(setProducts, setFavorites);
  }, []);

  return (
    <div className="app">
      <div className="App-row">
        <Filters />
      </div>
      <div className="App-row">
        <Products
          products={products}
          favorites={favorites}
          addToFavorites={addToFavorites(setFavorites)} />
      </div>
    </div>
  )
};

export default App;
