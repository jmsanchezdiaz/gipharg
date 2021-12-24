import React, { FormEvent, useEffect, useRef, useState } from "react";
import { useForm } from "../../custom hooks/useForm";
import { apiCall } from "../../helpers/apiCall";
import { GifType } from "../../types/interfaces";
import "./Search.scss";
import SearchResults from "./SearchResults";



const Search: React.FC = () => {
  const [results, setResults] = useState<GifType[]>([]);
  const isMount = useRef(true);
  const [formValues, handleInput, resetForm] = useForm<any>({
    search_box: "",
  });
  const search_box = formValues['search_box'] as string;

  const clearSearch = () => {
    resetForm();
    setResults([]);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const url = `https://api.giphy.com/v1/gifs/search?q=${search_box}`;
    apiCall(url)
      .then((res) => {
        if (isMount.current) {
          setResults(res.data);
        }
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    isMount.current = true;
    return () => {
      isMount.current = false;
    };
  }, []);

  return (
    <>
      <nav className="navbar">
        <h2>GIPHARG</h2>
        <div className="search">
          <form onSubmit={handleSubmit} className="search__form" action="">
            <input
              autoFocus
              onChange={handleInput}
              value={search_box}
              type="text"
              name="search_box"
              id="search_box"
              placeholder="example: cheeseburgers"
            />
            <button className="search__button material-icons">search</button>
            <button
              onClick={clearSearch}
              className="clear__button material-icons"
            >
              clear
            </button>
          </form>
        </div>
      </nav>
      <SearchResults results={results} />
    </>
  );
};

export default Search;
