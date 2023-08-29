import React from "react";
import { Route, Routes } from "react-router-dom";

// Layout
import MovieLayout from "../layouts/Movie.layout";

const MovieHOC = ({ component: Component, ...rest }) => {
  return (
    <Routes>
      <Route
        {...rest}
        element={
          <MovieLayout>
            <Component />
          </MovieLayout>
        }
      />
    </Routes>
  );
};

export default MovieHOC;