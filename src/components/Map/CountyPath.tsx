import type { County } from "../../app/types";
import { useMapContext } from "../../context/MapContext";
import { HOVER_COLOR } from "../../data/constants";
import { getMapColor } from "../../utils/utils";

interface CountyPath {
  county: County;
  displayAuto?: boolean;
  interactive?: boolean;
}

export const CountyPath: React.FC<CountyPath> = ({
  county,
  displayAuto = false,
  interactive = true,
}) => {
  const { setSelectedCounty, setHoveredCounty, hoveredCounty, selectedCounty } =
    useMapContext();

  const colorFill = !displayAuto
    ? "none"
    : hoveredCounty?.id === county.id || selectedCounty?.id === county.id
    ? HOVER_COLOR
    : getMapColor(county?.countyScore);

  return (
    <>
      <path
        id={county?.slug}
        d={county?.svgPath}
        style={{
          fill: colorFill,
          stroke: "black",
          strokeWidth: ".25",
          zIndex: 10,
          cursor: interactive ? "pointer" : "default",
          pointerEvents: interactive ? "auto" : "none",
        }}
        onMouseEnter={() => {
          setHoveredCounty(county);
        }}
        onMouseLeave={() => {
          setHoveredCounty(undefined);
        }}
        onClick={() => {
          setHoveredCounty(undefined);
          setSelectedCounty(
            selectedCounty?.id === county.id ? undefined : county,
          );
        }}
      />
      {displayAuto && (
        <text
          x={county?.codeX}
          y={county?.codeY}
          textAnchor="middle"
          dominantBaseline="middle"
          pointerEvents="none"
        >
          {county?.code}
        </text>
      )}
    </>
  );
};
