import React from 'react';
import Favorite from './Favorite';
import './Product.css';

const toImageUrl = (product) =>
  `//res.cloudinary.com/imperfect/image/upload/w_400,h_260,c_pad,b_auto,d_products:no-image-found.png/${product.imageFilename}`;

const Product = ({ product, isFavorite, addToFavorites }) => {
  return (
    <div className="Product-card">
      <Favorite
        product={product}
        isFavorite={isFavorite}
        addToFavorites={addToFavorites} />
      <div>
        <img
          src={toImageUrl(product)}
          alt={product.name}
        />
      </div>
      <div>
        {product.name}
      </div>
      <div>
        ${product.price} | {product.packageUnitAmount} {product.packageUnitFormatted}
      </div>
    </div>
  );
};

export default Product;
