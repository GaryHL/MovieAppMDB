import React from 'react';
import {motion} from 'framer-motion';

import apiConfig from '../../api/apiConfig';
import './movie.scss';

function Movie ({movie}){
  return (
    <motion.div layout initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
        <h2 className='title_movie'>{movie.title}</h2>
        <img className='img_movie' src={apiConfig.w500Image + movie.backdrop_path} alt=""/>
    </motion.div>
  ) 
}

export default Movie