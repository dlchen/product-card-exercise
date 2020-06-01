import React from 'react';
import './Favorite.css';

const Favorite = ({ product, isFavorite, addToFavorites }) => {

  const favoriteClass = `icon ${isFavorite ? 'favorite' : 'not-favorite'}`;
  const ariaLabel = isFavorite ? 'filled heart' : 'empty heart';
  const heartIcon = isFavorite ? '♥' : '♡';

  return (
    <div
      className={favoriteClass}
      onClick={addToFavorites(product)}
      role="img"
      aria-label={ariaLabel}>
      {heartIcon}
    </div>
  );
}

export default Favorite;
