import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoviesPopular from '../components/moviesPopular/MoviesPopular'
import ActiveMovie from '../components/activeMovie/ActiveMovie';

function Router() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MoviesPopular/>} />
          <Route path="/movie-select" element={<ActiveMovie/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Router;