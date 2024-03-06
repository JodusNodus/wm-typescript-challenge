import { AppProvidersWrapper } from "context/wrapper";
import { Router } from "./router";

import "./index.css";

const App = () => (
  <AppProvidersWrapper>
    <Router />
  </AppProvidersWrapper>
);

export default App;
