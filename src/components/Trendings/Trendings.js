import React, { useState, useEffect, useRef } from "react";
import { apiCall } from "../../helpers/apiCall";
import TrendingList from "./TrendingList";
import "./Trendings.scss";

const Trendings = () => {
  const [trendings, setTrendings] = useState([]);
  const isMount = useRef(true);

  useEffect(() => {
    apiCall("https://api.giphy.com/v1/gifs/trending?limit=10").then((res) => {
      const { data } = res;
      if (isMount.current) {
        setTrendings(data);
      }
    });

    return () => {
      isMount.current = false;
    };
  }, []);

  return (
    <div className="trendings">
      <h1 className="trendings__title">Trendings</h1>
      <TrendingList trendings={trendings} />
      <hr />
    </div>
  );
};

export default Trendings;
