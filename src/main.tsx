import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { MapContextProvider } from "./context/MapContext.tsx";
import { BrowserRouter } from "react-router-dom";
import { DataContextProvider } from "./context/DataContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DataContextProvider>
      <MapContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MapContextProvider>
    </DataContextProvider>
  </StrictMode>,
);
