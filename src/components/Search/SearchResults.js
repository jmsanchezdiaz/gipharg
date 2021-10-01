import { useEffect } from "react";
import { usePagination } from "../../custom hooks/usePagination";
import Gif from "../Gif/Gif";

const SearchResults = ({ results }) => {
  const {
    filtered,
    pageNumber,
    goNextPage,
    goPrevPage,
    amountOfPages,
    resetPagination,
  } = usePagination(results, 12);
  const isNotLastPage = pageNumber < amountOfPages;
  const isNotFirstPage = pageNumber > 1;

  useEffect(() => {
    return () => resetPagination();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [results]);

  return (
    <div>
      {filtered?.length > 0 && (
        <div className="search__results">
          <h2 className="search__results-title">Results :</h2>
          <ul className="search__list">
            {filtered?.map((gif) => (
              <Gif key={gif.id} gif={gif} />
            ))}
          </ul>
          <div className="search__pagination">
            <div className="search__pagination-handlers">
              {isNotFirstPage && <button onClick={goPrevPage}>Previous</button>}
              {isNotLastPage && <button onClick={goNextPage}>Next</button>}
            </div>
            <h4>Page : {pageNumber}</h4>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchResults;