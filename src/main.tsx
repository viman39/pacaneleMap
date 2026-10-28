import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { MapContextProvider } from "./context/MapContext.tsx";
import { BrowserRouter } from "react-router-dom";
import App from "./app/App.tsx";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <MapContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MapContextProvider>
    </Provider>
  </StrictMode>,
);
