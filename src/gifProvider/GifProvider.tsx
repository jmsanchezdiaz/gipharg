import { createContext, useEffect, useState } from 'react';
import { GifContextType, GifType } from '../types/interfaces';

const GifContext = createContext({} as GifContextType);

interface Props {
  children: JSX.Element | JSX.Element[];
}

const GifProvider: React.FC<Props> = ({ children }) => {
  const [favourites, setFavourites] = useState(
    JSON.parse(localStorage.getItem('favourites') as string) || [],
  );

  const addToFavourites = (favouriteGif: GifType) =>
    setFavourites([...favourites, favouriteGif]);

  const removeFromFavourites = (favouriteGifId: GifType['id']) => {
    setFavourites(
      favourites.filter(
        (favourite: GifType) => favourite.id !== favouriteGifId,
      ),
    );
  };

  const isOnFavourite = (id: GifType['id']) => {
    return favourites?.some((favourite: GifType) => favourite?.id === id);
  };

  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites));
  }, [favourites]);

  const gifData: GifContextType = {
    favourites,
    isOnFavourite,
    addToFavourites,
    removeFromFavourites,
  };

  return <GifContext.Provider value={gifData}>{children}</GifContext.Provider>;
};

export { GifProvider };
export default GifContext;
