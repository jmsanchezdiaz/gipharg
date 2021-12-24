import React from "react";
import { GifType } from "../../types/interfaces";
import Gif from "../Gif/Gif";

interface Props{
  favourites: GifType[]
}

const FavouriteList: React.FC<Props> = ({ favourites }) => {
  return (
    <ul className="favourites__list">
      {favourites?.map((gif) => (
        <Gif key={gif.id} gif={gif} />
      ))}
    </ul>
  );
};

export default FavouriteList;
