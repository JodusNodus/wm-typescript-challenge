import React, { PropsWithChildren, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import Fallback from "fallback";
import { DarkModeProvider } from "./darkModeContext";

const queryClient = new QueryClient();

export const AppProvidersWrapper = ({ children }: PropsWithChildren) => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <DarkModeProvider>
          <BrowserRouter>
            <Suspense fallback={<Fallback />}>{children}</Suspense>
          </BrowserRouter>
        </DarkModeProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};
