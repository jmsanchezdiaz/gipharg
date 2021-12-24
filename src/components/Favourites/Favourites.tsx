import React, { useContext } from "react";
import GifContext from "../../gifProvider/GifProvider";
import { GifContextType } from "../../types/interfaces";
import FavouriteList from "./FavouriteList";
import "./Favourites.scss";

const Favourites: React.FC = () => {
  const { favourites } = useContext<GifContextType>(GifContext);
  return (
    <div className="favourites">
      {favourites.length > 0 && (
        <>
          <h1 className="favourites__title">Favourites</h1>
          <FavouriteList favourites={favourites} />
          <hr />
        </>
      )}
    </div>
  );
};

export default Favourites;
