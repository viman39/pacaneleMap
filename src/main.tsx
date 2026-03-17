import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { UatContextProvider } from "./context/UatContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UatContextProvider>
      <App />
    </UatContextProvider>
  </StrictMode>,
);
