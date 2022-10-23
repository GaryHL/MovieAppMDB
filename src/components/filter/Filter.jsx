import React from "react";
import { useEffect, useState } from "react";
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
      setFiltered(filtered);
    }, [activeGenere]);
  function cambioFilter(e){
    let btn1 = document.getElementById("1")
    let btn2 = document.getElementById("2")
    let btn3 = document.getElementById("3")
    
    btn1.classList.remove("active");
    btn2.classList.remove("active");
    btn3.classList.remove("active");
    e.target.classList.add("active");
    if(e.target.id == "1"){
      setActiveGenere(0)
    }
    else if(e.target.id == "2"){
      setActiveGenere(35)
    }
    else if(e.target.id == "3"){
      setActiveGenere(28)
    }
  }

  return (
    <div className="filter_container">
      <h3 id="1"className="button_filter active" onClick={ cambioFilter}>ALL</h3>
      <h3 id="2"className="button_filter" onClick={ cambioFilter}>COMEDY</h3>
      <h3 id="3"className="button_filter" onClick={ cambioFilter}>ACTION</h3>
    </div>
  );
}

export default Filter;
