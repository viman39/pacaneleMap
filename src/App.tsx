import RomaniaMap from "./components/RomaniaMap";
import InfoPanel from "./components/InfoPanel";

export default function App() {
  return (
    <div className="layout">
      <div className="panel">
        <InfoPanel />
      </div>
      <div className="map">
        <RomaniaMap />
      </div>
    </div>
  );
}
