import { createContext, useEffect, useState } from "react";

const GifContext = createContext();

const GifProvider = ({ children }) => {
  const [favourites, setFavourites] = useState(
    JSON.parse(localStorage.getItem("favourites")) || []
  );

  const addToFavourites = (favouriteGif) => {
    setFavourites([...favourites, favouriteGif]);
  };

  const removeFromFavourites = (favouriteGifId) => {
    setFavourites(
      favourites.filter((favourite) => favourite.id !== favouriteGifId)
    );
  };

  const isOnFavourite = (id) => {
    return favourites?.some((fav) => fav?.id === id);
  };

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const gifData = {
    favourites,
    isOnFavourite,
    addToFavourites,
    removeFromFavourites,
  };

  return <GifContext.Provider value={gifData}>{children}</GifContext.Provider>;
};

export { GifProvider };
export default GifContext;
