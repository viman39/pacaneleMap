import { useUatContext } from "../context/UatContext";

export default function InfoPanel() {
  const { hoveredUat, setSelectedUat, selectedUat } = useUatContext();
  console.log("Hovered UAT in InfoPanel:", hoveredUat);

  if (!hoveredUat) {
    return (
      <div>
        <h2>Romania Map</h2>
        <div style={{ display: "flex", gap: "10px" }}>
          <p>Click a county to see details.</p>
          {selectedUat && (
            <button
              onClick={() => {
                setSelectedUat(undefined);
              }}
            >
              Anapoi
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2>{hoveredUat?.nume}</h2>
      <p>County code: {hoveredUat?.id}</p>
    </div>
  );
}
