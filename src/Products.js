import React from 'react';
import Product from './Product';
import './Products.css';

const productTransform = (favorites) => {

  return (product) => {
    return (
      <Product
        key={product.variantId}
        product={product}
        isFavorite={favorites.has(product.variantId)} />
    );
  }
}

const Products = ({ products, favorites }) => {
  return (
    <div className="Products-grid">
      {products.map(productTransform(favorites))}
    </div>
  );
};

export default Products;
