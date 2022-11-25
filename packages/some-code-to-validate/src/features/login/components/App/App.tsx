import React from "react";

import { Route, Routes } from "react-router-dom";

import { APP_CONTAINER_CLASS } from "@helpers/constants";
import PAGES, { ROUTES } from "@helpers/pages";

const App = () => (
  <div className={APP_CONTAINER_CLASS}>
    <Routes>
      <Route path={PAGES.LOGIN}>
        <Route index element={<div>RegistrationForm</div>} />
        <Route
          path={ROUTES.ADD_REAL_ESTATE}
          element={<div>AddedRealEstateForm</div>}
        />
      </Route>
      <Route path={PAGES.PAGE_NOT_FOUND} element={<div>404</div>} />
    </Routes>
  </div>
);

export default App;
