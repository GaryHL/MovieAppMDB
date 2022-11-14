import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import apiConfig from "../../api/apiConfig";
import "./movie.scss";

function Movie({ movie, setMovieSelect }) {


  function guardarEnStorage(object) {
    let movieSelect= object;

    localStorage.setItem("movie", JSON.stringify(movieSelect));
  }

  function guardar (){
    guardarEnStorage(movie)
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={guardar}
    >
      <Link to="/movie-select">
      <div className="container_movie" >
        <img
          className="img_movie"
          src={apiConfig.w500Image + movie.backdrop_path}
          alt=""
        />
        <span className="shadow"></span>
        <div className="cualification">
          <h2 className="title_movie">{movie.title}</h2>
        </div>
        <div className="container_overview">
          <div className="data_overview">
            <h2 className="title_overview">{movie.title}</h2>
            <h3
              className={
                movie.vote_average < 7
                  ? "popularity_movie"
                  : "popularity_movie green"
              }
            >
              {movie.vote_average}
            </h3>
          </div>
          <p className="overview">{movie.overview}</p>
        </div>
      </div>
      </Link>
    </motion.div>
  );
}

export default Movie;
