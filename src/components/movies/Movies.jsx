import React, { useEffect, useState } from "react";
import Movie from '../movie/Movie';

function Movies() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=745780471818b1c222d7aa3ae617451f&language=en-US&page=1"
    );
    const movies = await data.json();
    setPopular(movies.results);
    console.log(popular)
  };

  return(
    <div className="container_movies">
        {popular.map((movie) =>{
                return 
                    <Movie key={movie.id} title={movie.title}/>
                    
            } )}
    </div>
  );
}

export default Movies;
