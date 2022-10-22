import React from "react";
import { motion } from "framer-motion";

import apiConfig from "../../api/apiConfig";
import "./movie.scss";

function Movie({ movie }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>
        <img
          className="img_movie"
          src={apiConfig.w500Image + movie.backdrop_path}
          alt=""
        />
        <h2 className="title_movie">{movie.title}</h2>
      </div>
    </motion.div>
  );
}

export default Movie;
