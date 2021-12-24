import React from "react";
import { GifType } from "../../types/interfaces";
import Gif from "../Gif/Gif";

interface Props{
  trendings: GifType[]
}


const TrendingList: React.FC<Props> = ({ trendings }) => {
  return (
    <div>
      <ul className="trendings__list">
        {trendings?.map((gif) => (
          <Gif key={gif.id} gif={gif} />
        ))}
      </ul>
    </div>
  );
};

export default TrendingList;
