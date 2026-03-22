import { useMapContext } from "../context/MapContext";
import { HOVER_COLOR, LIMITA_POPULATIE, MAP_NEUTRAL } from "../data/constants";
import type { UAT } from "../data/types";
import { calcColorUat } from "../utils/utils";

export const PathUAT = ({ uat }: { uat: UAT }) => {
  const { setHoveredUat, hoveredUat, selectedUat, setSelectedUat } =
    useMapContext();

  const rgbUat = calcColorUat(uat);
  const color = uat?.date?.populatie > LIMITA_POPULATIE ? rgbUat : MAP_NEUTRAL;

  return (
    <path
      id={uat.id}
      d={uat.dPath}
      onMouseEnter={() => {
        setHoveredUat(uat);
      }}
      onMouseLeave={() => {
        setHoveredUat(undefined);
      }}
      onClick={() => {
        setHoveredUat(undefined);
        setSelectedUat(selectedUat?.id === uat.id ? undefined : uat);
      }}
      style={{
        fill:
          hoveredUat?.id === uat.id || selectedUat?.id === uat.id
            ? HOVER_COLOR
            : color,
        stroke: "#000",
        strokeWidth: uat?.resedinta ? "0.7" : "0.25",
      }}
      data-originalStrokeWidth="0.25"
      stroke="#1e024b"
    />
  );
};
