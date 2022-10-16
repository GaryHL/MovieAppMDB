import React from "react";
import { useEffect } from "react";
import "./filter.scss";

function Filter({ setActiveGenere, activeGenere, setFiltered, popular }) {
  useEffect(() => {
    if (activeGenere === 0) {
      setFiltered(popular);
      return;
    }
    const filtered = popular.filter((movie) =>
      movie.genre_ids.includes(activeGenere)
    );
    setFiltered(filtered)
  }, [activeGenere]);

  return (
    <div className="filter_container">
      <button onClick={() => setActiveGenere(0)}>All</button>
      <button onClick={() => setActiveGenere(35)}>Comedy</button>
      <button onClick={() => setActiveGenere(28)}>Action</button>
    </div>
  );
}

export default Filter;
