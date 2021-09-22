import React, { useContext } from "react";
import GifContext from "../../gifProvider/GifProvider";
import FavouriteList from "./FavouriteList";
import "./Favourites.scss";

const Favourites = () => {
  const { favourites } = useContext(GifContext);
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
