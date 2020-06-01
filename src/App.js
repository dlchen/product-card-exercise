import React, { useState, useEffect } from 'react';
import './App.css';
import Products from './Products';
import Filters from './Filters';

/**
 * Fetches resource and sets to state (optional transform)
 * @param {string} url - url to fetch
 * @param {function} setter - setter function from useState
 * @param {function} transform - (optional) transform before setting
 */
const fetchAndSet = async (url, setter, transform = (x) => x) => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    setter(transform(json));
  }
  catch (error) {
    console.error(`Error fetching ${url}`, error);
  };
}

const App = () => {

  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState(new Set());

  useEffect(() => {
    fetchAndSet('/products', setProducts);
    fetchAndSet('/products/favorites', setFavorites, (arr) => new Set(arr));
  }, []);

  return (
    <div className="app">
      <div className="App-row">
        <Filters />
      </div>
      <div className="App-row">
        <Products products={products} favorites={favorites} />
      </div>
    </div>
  )
};

export default App;
