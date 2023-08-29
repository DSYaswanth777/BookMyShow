import React from "react";
import { Route, Routes } from "react-router-dom";

// Layout
import DefaultLayout from "../layouts/Default.layout";

const DefaultHOC = ({ component: Component, ...rest }) => {
  return (
    <Routes>
      <Route
        {...rest}
        element={
          <DefaultLayout>
            <Component />
          </DefaultLayout>
        }
      />
    </Routes>
  );
};

export default DefaultHOC;
