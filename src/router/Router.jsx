import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoviesPopular from '../components/moviesPopular/MoviesPopular'

function Router() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MoviesPopular/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Router;