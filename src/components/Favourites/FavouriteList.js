import React from "react";
import Gif from "../Gif/Gif";

const FavouriteList = ({ favourites }) => {
  return (
    <ul className="favourites__list">
      {favourites?.map((gif) => (
        <Gif key={gif.id} gif={gif} />
      ))}
    </ul>
  );
};

export default FavouriteList;
