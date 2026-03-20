import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { MapContextProvider } from "./context/MapContext.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MapContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MapContextProvider>
  </StrictMode>,
);
