import React, { useContext } from 'react';
import GifContext from '../../gifProvider/GifProvider';
import { GifType } from '../../types/interfaces';

interface Props {
  id: GifType['id'];
  gif: GifType;
}

const GifButtons: React.FC<Props> = ({ id, gif }) => {
  const { isOnFavourite, addToFavourites, removeFromFavourites } =
    useContext(GifContext);
  return (
    <div className='gif__buttons'>
      {!isOnFavourite(id) ? (
        <button
          aria-label='add to favourites'
          onClick={() => addToFavourites(gif)}
          className='gif__favourite  favourite__button'>
          <span className='material-icons'>star_border</span>
        </button>
      ) : (
        <button
          aria-label='remove from favourites'
          onClick={() => removeFromFavourites(id)}
          className='gif__favourite
            favourite__button favourite__button--remove
            '>
          <span className='material-icons'>remove_circle_outline</span>
        </button>
      )}
    </div>
  );
};

export default GifButtons;
