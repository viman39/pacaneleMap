import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { MapContextProvider } from "./context/MapContext.tsx";
import { BrowserRouter } from "react-router-dom";
import { DataContextProvider } from "./context/DataContext.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DataContextProvider>
      <MapContextProvider>
        <AuthProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AuthProvider>
      </MapContextProvider>
    </DataContextProvider>
  </StrictMode>,
);
