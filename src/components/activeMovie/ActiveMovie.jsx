import React from "react";
import {useState, useEffect} from 'react';
import "./activeMovie.scss";
import apiConfig from "../../api/apiConfig";

import { Link } from "react-router-dom";

function ActiveMovie(movieActive, movieSelect) {

  
      let movie = JSON.parse(localStorage.getItem("movie"))

  return (
    <div className="container_movie_select">
        
        
        <img
          className="img_movie"
          src={apiConfig.originalImage + movie.backdrop_path}
          alt=""
        />
        <h1>
        {`${movie.title}`}
        </h1>
        
        <Link to="/">
          <button>Back</button>
        </Link>
        
    </div>
  );
}

export default ActiveMovie;
