import { useMapContext } from "../context/MapContext";
import { HOVER_COLOR } from "../data/constants";
import type { Judet } from "../data/types";
import { calcColorJudet } from "../utils/utils";

export const PathJudet = ({
  judet,
  displayAuto,
}: {
  judet: Judet;
  displayAuto: boolean;
}) => {
  const { setSelectedJudet, setHoveredJudet, hoveredJudet, selectedJudet } =
    useMapContext();

  const fill = !displayAuto
    ? "none"
    : hoveredJudet?.id === judet.id || selectedJudet?.id === judet.id
    ? HOVER_COLOR
    : calcColorJudet(judet);

  return (
    <>
      <path
        id={judet?.id}
        d={judet?.dPath}
        style={{
          fill,
          stroke: "black",
          strokeWidth: ".25",
          zIndex: 10,
          cursor: "pointer",
        }}
        onMouseEnter={() => {
          setHoveredJudet(judet);
        }}
        onMouseLeave={() => {
          setHoveredJudet(undefined);
        }}
        onClick={() => {
          setHoveredJudet(undefined);
          setSelectedJudet(selectedJudet?.id === judet.id ? undefined : judet);
        }}
      />
      {displayAuto && (
        <text
          x={judet?.autoX}
          y={judet?.autoY}
          textAnchor="middle"
          dominantBaseline="middle"
          pointerEvents="none"
        >
          {judet?.auto}
        </text>
      )}
    </>
  );
};
