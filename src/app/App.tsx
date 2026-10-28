import { Route, Routes } from "react-router-dom";
import { Layout } from "../components/Layout";
import { AboutCampaign } from "../pages/AboutCampaign";
import { Login } from "../pages/Login";
import { Homepage } from "../pages/Homepage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/despre-campanie" element={<AboutCampaign />} />
        <Route path="/login" element={<Login />} />
        {/* <Route
          path="/admin-panel"
          element={
            <RequireAuth>
              <AdminPanel />
            </RequireAuth>
          }
        /> */}
        <Route path="/:countySlug" element={<Homepage />} />
      </Route>
    </Routes>
  );
}
