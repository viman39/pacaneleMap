import { useUatContext } from "../context/UatContext";
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
  const { setSelectedUat, setHoveredUat, hoveredUat, selectedUat } =
    useUatContext();

  return (
    <>
      <path
        id={judet?.id}
        d={judet?.dPath}
        style={{
          fill:
            selectedUat?.id === judet.id
              ? "none"
              : hoveredUat?.id === judet.id
              ? HOVER_COLOR
              : calcColorJudet(judet),
          stroke: "black",
          strokeWidth: ".25",
          zIndex: 10,
        }}
        onMouseEnter={() => {
          setHoveredUat(judet);
        }}
        onMouseLeave={() => {
          setHoveredUat(undefined);
        }}
        onClick={() => {
          setHoveredUat(undefined);
          setSelectedUat(selectedUat?.id === judet.id ? undefined : judet);
        }}
      >
        {judet?.auto}
      </path>
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
