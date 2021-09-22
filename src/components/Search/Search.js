import React, { useEffect, useRef, useState } from "react";
import { useForm } from "../../custom hooks/useForm";
import { apiCall } from "../../helpers/apiCall";
import "./Search.scss";
import SearchResults from "./SearchResults";

const Search = () => {
  const [results, setResults] = useState([]);
  const isMount = useRef(true);
  const [formValues, handleInput, resetForm] = useForm({
    search_box: "",
    amount: "10",
  });
  const { search_box, amount } = formValues;

  const clearSearch = () => {
    resetForm();
    setResults([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = `https://api.giphy.com/v1/gifs/search?q=${search_box}&limit=${amount}`;
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
    <div className="search">
      <h1 className="search__title">Search</h1>
      <form onSubmit={handleSubmit} className="search__form" action="">
        <input
          onChange={handleInput}
          value={search_box}
          type="text"
          name="search_box"
          id="search_box"
          placeholder="example: cheeseburgers"
        />
        <input
          max="4999"
          min="10"
          name="amount"
          id="amount"
          type="number"
          value={amount}
          onChange={handleInput}
        />
        <button className="search__button material-icons">search</button>
        <button onClick={clearSearch} className="clear__button material-icons">
          clear
        </button>
      </form>
      <SearchResults results={results} />
    </div>
  );
};

export default Search;
