import { useUatContext } from "../context/UatContext";
import { judete } from "../data/romania-counties";
import type { Judet, UAT } from "../data/types";
import { calcColorJudet, calcColorUat } from "../utils/utils";

const DEFAULT_VIEW_BOX = "0 0 900 665";
const LIMITA_POPULATIE = 15000;
const HOVER_COLOR = "rgb(198, 226, 255)";

export default function RomaniaMap() {
  const { selectedUat } = useUatContext();

  return (
    <svg
      id="wrapper"
      viewBox={DEFAULT_VIEW_BOX}
      preserveAspectRatio="xMinYMin"
      height="70vh"
      // width="900"
    >
      <g id="map-group">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="map"
          // width="900"
          height="70vh"
          stroke-linecap="round"
          stroke-linejoin="round"
          version="1.2"
          viewBox={selectedUat ? selectedUat.bBox : DEFAULT_VIEW_BOX}
          preserveAspectRatio="xMinYMin"
        >
          <g id="UATs">
            {selectedUat &&
              selectedUat.UATs.map((uat: any) => (
                <PathUAT
                  key={uat.id}
                  uat={uat}
                  popAvailable={!!selectedUat.date?.popAvailable}
                />
              ))}
          </g>
          <g id="counties">
            {selectedUat ? (
              <PathJudet judet={selectedUat} displayAuto={false} />
            ) : (
              judete.map((judet) => (
                <PathJudet judet={judet} displayAuto={true} />
              ))
            )}
          </g>
        </svg>
      </g>
    </svg>
  );
}

const PathJudet = ({
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

const PathUAT = ({
  uat,
  popAvailable,
}: {
  uat: UAT;
  popAvailable: boolean;
}) => {
  const { setHoveredUat, hoveredUat } = useUatContext();

  const cuat = calcColorUat(uat);
  const color = popAvailable
    ? uat?.date?.populatie > LIMITA_POPULATIE
      ? cuat
      : "white"
    : cuat;

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
