import type { UatDTO } from "../../app/types";
import { useMapContext } from "../../context/MapContext";
import {
  HOVER_COLOR,
  LIMITA_POPULATIE,
  MAP_NEUTRAL,
} from "../../data/constants";
import { getMapColor } from "../../utils/utils";

interface UatPath {
  UAT: UatDTO;
}

export const UatPath: React.FC<UatPath> = ({ UAT }) => {
  const { setHoveredUat, hoveredUat, selectedUat, setSelectedUat } =
    useMapContext();

  const score = UAT?.slotsStatus ? Math.ceil((UAT.slotsStatus / 4) * 100) : 0;
  const rgbUat = getMapColor(score);
  const isDensePopulated = (UAT?.population || 0) >= LIMITA_POPULATIE;
  const fillColor =
    hoveredUat?.id === UAT.id || selectedUat?.id === UAT.id
      ? HOVER_COLOR
      : isDensePopulated
      ? rgbUat
      : MAP_NEUTRAL;
  const strokeWidth = UAT?.isResidence
    ? "0.7"
    : isDensePopulated
    ? "0.4"
    : "0.2";

  return (
    <path
      id={UAT.name}
      d={UAT.svgPath}
      onMouseEnter={() => {
        setHoveredUat(UAT);
      }}
      onMouseLeave={() => {
        setHoveredUat(undefined);
      }}
      onClick={() => {
        setHoveredUat(undefined);
        setSelectedUat(selectedUat?.id === UAT.id ? undefined : UAT);
      }}
      style={{
        fill: fillColor,
        stroke: "#000",
        strokeWidth,
      }}
      stroke="#1e024b"
    />
  );
};
