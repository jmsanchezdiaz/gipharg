import React from "react";
import Gif from "../Gif/Gif";

const TrendingList = ({ trendings }) => {
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
