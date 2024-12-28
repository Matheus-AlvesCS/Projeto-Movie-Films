import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import GlobalStyle from "./styles/globalStyles.js";
import Router from "./routes/routes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </StrictMode>
);
