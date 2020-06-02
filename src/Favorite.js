import React from 'react';
import './Favorite.css';

const Favorite = ({ product, isFavorite, addToFavorites }) => {

  const favoriteClass = `icon ${isFavorite ? 'favorite' : 'not-favorite'}`;
  const ariaLabel = isFavorite ? 'filled heart' : 'empty heart';
  const heartIcon = isFavorite ? '♥' : '♡';

  const handleClick = () => addToFavorites(product);

  return (
    <div
      className={favoriteClass}
      onClick={handleClick}
      role="img"
      aria-label={ariaLabel}>
      {heartIcon}
    </div>
  );
}

export default Favorite;
