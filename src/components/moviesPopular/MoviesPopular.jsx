import React from "react";
import { useEffect, useState } from "react";
import "./moviesPopular.scss";

import Loader from '../loader/Loader'
import apiConfig from "../../api/apiConfig";
import Filter from "../filter/Filter";
import Movie from "../movie/Movie";
import ActiveMovie from "../activeMovie/ActiveMovie";

import { motion, AnimatePresence } from "framer-motion";

const MoviesPopular = () => {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenere, setActiveGenere] = useState(0);


  const [movieActive,setMovieActive] = useState(false);  

  useEffect(() => {
    fetchPopular();
  }, []);


  const fetchPopular = async () => {
    const data = await fetch(
      `${apiConfig.baseUrl}movie/popular?api_key=${apiConfig.apikey}&language=en-US&page=2`
    );
    const movies = await data.json();
    // console.log(movies.results); 
    setPopular(movies.results);
    setFiltered(movies.results);
    console.log(popular)
  };

  return (
    <>
    {/* <Loader/> */}
    <div className="container_main">
      <div className="movieApp_title">
        <h1>MOVIE APP</h1>
      </div>
      <Filter
        popular={popular}
        setFiltered={setFiltered}
        activeGenere={activeGenere}
        setActiveGenere={setActiveGenere}
      />
      <motion.div layout className="container_popularMovies">
        <AnimatePresence>
          {filtered.map((movie) => {
            return <Movie key={movie.id} movie={movie}/>;
          })}
        </AnimatePresence>
      </motion.div> 
    </div>
    </>
  );
};

export default MoviesPopular;
