import RomaniaMap from "./components/RomaniaMap";
import { Route, Routes } from "react-router-dom";
import { DespreCampanie } from "./components/DespreCampanie";
import { Layout } from "./components/Layout";
import InfoPanel from "./components/InfoPanel";
import { LatestNews } from "./components/LatestNews";
import { Login } from "./pages/Login";
import { AdminPanel } from "./pages/AdminPanel";
import { RequireAuth } from "./components/RequireAuth";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MainApp />} />
        <Route path="/despre-campanie" element={<DespreCampanie />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin-panel"
          element={
            <RequireAuth>
              <AdminPanel />
            </RequireAuth>
          }
        />
        <Route path="/:countyName" element={<MainApp />} />
      </Route>
    </Routes>
  );
}

const MainApp = () => (
  <>
    <InfoPanel />
    <RomaniaMap />
    <LatestNews />
  </>
);
