import React, { Suspense } from "react";

import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./components/App";

const root = createRoot(document.getElementById("react-root") as HTMLElement);
root.render(
  <Suspense fallback={<div>Загрузка</div>}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Suspense>
);
