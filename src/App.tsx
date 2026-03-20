import RomaniaMap from "./components/RomaniaMap";
import InfoPanel from "./components/InfoPanel";
import { Route, Routes } from "react-router-dom";
import { DespreCampanie } from "./components/DespreCampanie";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/:countyName" element={<Home />} />

      <Route path="/despre-campanie" element={<DespreCampanie />} />
    </Routes>
  );
}

const Home = () => (
  <div className="layout">
    <div className="panel">
      <InfoPanel />
    </div>
    <div className="map">
      <RomaniaMap />
    </div>
  </div>
);
