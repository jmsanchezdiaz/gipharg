import React from "react";
import Gif from "../Gif/Gif";

const SearchResults = ({ results }) => {
  return (
    <div>
      {results?.length > 0 && (
        <div className="search__results">
          <h2 className="search__results-title">Results :</h2>
          <ul className="search__list">
            {results?.map((gif) => (
              <Gif key={gif.id} gif={gif} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
