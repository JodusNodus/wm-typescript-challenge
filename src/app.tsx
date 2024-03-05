import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import { DarkModeProvider } from "context/darkModeContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { Router } from "./router";
import Fallback from "./fallback";

import "./index.css";

const queryClient = new QueryClient();

const App = () => (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <DarkModeProvider>
        <BrowserRouter>
          <Suspense fallback={<Fallback />}>
            <Router />
          </Suspense>
        </BrowserRouter>
      </DarkModeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

export default App;
