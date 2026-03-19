import { useUatContext } from "../context/UatContext";
import { HOVER_COLOR, LIMITA_POPULATIE } from "../data/constants";
import type { UAT } from "../data/types";
import { calcColorUat } from "../utils/utils";

export const PathUAT = ({ uat }: { uat: UAT }) => {
  const { setHoveredUat, hoveredUat } = useUatContext();

  const rgbUat = calcColorUat(uat);
  const color = uat?.date?.populatie > LIMITA_POPULATIE ? rgbUat : "white";

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
      style={{
        fill: hoveredUat?.id === uat.id ? HOVER_COLOR : color,
        stroke: "#000",
        strokeWidth: uat?.resedinta ? "1" : "0.25",
      }}
      data-originalStrokeWidth="0.25"
      stroke="#1e024b"
    />
  );
};
