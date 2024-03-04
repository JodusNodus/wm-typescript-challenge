import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import { DarkModeProvider } from "context/darkModeContext";
import { Router } from "./router";
import Fallback from "./fallback";

import "./index.css";

const App = () => (
  <React.StrictMode>
    <DarkModeProvider>
      <BrowserRouter>
        <Suspense fallback={<Fallback />}>
          <Router />
        </Suspense>
      </BrowserRouter>
    </DarkModeProvider>
  </React.StrictMode>
);

export default App;
