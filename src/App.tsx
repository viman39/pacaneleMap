import RomaniaMap from "./components/RomaniaMap";
import { Route, Routes } from "react-router-dom";
import { DespreCampanie } from "./components/DespreCampanie";
import { Layout } from "./components/Layout";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<RomaniaMap />} />
        <Route path="/despre-campanie" element={<DespreCampanie />} />
        <Route path="/:countyName" element={<RomaniaMap />} />
      </Route>
    </Routes>
  );
}
