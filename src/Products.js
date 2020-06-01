import React from 'react';
import Product from './Product';
import './Products.css';

const productTransform = (favorites, addToFavorites) => {

  return (product) => (
    <Product
      key={product.variantId}
      product={product}
      isFavorite={favorites.has(product.variantId)}
      addToFavorites={addToFavorites} />
  );
}

const Products = ({ products, favorites, addToFavorites }) => {
  return (
    <div className="Products-grid">
      {products.map(productTransform(favorites, addToFavorites))}
    </div>
  );
};

export default Products;
