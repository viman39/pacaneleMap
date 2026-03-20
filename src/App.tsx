import RomaniaMap from "./components/RomaniaMap";
import { Route, Routes } from "react-router-dom";
import { DespreCampanie } from "./components/DespreCampanie";
import { Layout } from "./components/Layout";
import InfoPanel from "./components/InfoPanel";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MainApp />} />
        <Route path="/despre-campanie" element={<DespreCampanie />} />
        <Route path="/:countyName" element={<MainApp />} />
      </Route>
    </Routes>
  );
}

const MainApp = () => (
  <>
    <InfoPanel />
    <RomaniaMap />
  </>
);
