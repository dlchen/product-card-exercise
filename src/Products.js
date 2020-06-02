import React from 'react';
import Product from './Product';
import './Products.css';

const Products = ({ products, favorites, addToFavorites }) => {

  return (
    <div className="Products-grid">
      {products.map((product) => (
        <Product
          key={product.variantId}
          product={product}
          isFavorite={favorites.has(product.variantId)}
          addToFavorites={addToFavorites} />
      ))}
    </div>
  );
};

export default Products;
