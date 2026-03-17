import { useUatContext } from "../context/UatContext";
import { judete } from "../data/romania-counties";
import type { Judet, UAT } from "../data/types";

const DEFAULT_VIEW_BOX = "0 0 900 665";

export default function RomaniaMap() {
  const { selectedUat } = useUatContext();

  return (
    <svg
      id="wrapper"
      viewBox={DEFAULT_VIEW_BOX}
      preserveAspectRatio="xMinYMin"
      height="665"
      width="900"
    >
      <g id="map-group">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="map"
          width="900"
          height="665"
          stroke-linecap="round"
          stroke-linejoin="round"
          version="1.2"
          viewBox={selectedUat ? selectedUat.bBox : DEFAULT_VIEW_BOX}
          preserveAspectRatio="xMinYMin"
        >
          <g id="UATs">
            {selectedUat &&
              selectedUat.UATs.map((uat: any) => (
                <PathUAT key={uat.id} uat={uat} />
              ))}
          </g>
          <g id="counties">
            {selectedUat ? (
              <PathJudet judet={selectedUat} />
            ) : (
              judete.map((judet) => <PathJudet judet={judet} />)
            )}
          </g>
        </svg>
      </g>
    </svg>
  );
}

const PathJudet = ({ judet }: { judet: Judet }) => {
  const { setSelectedUat, setHoveredUat, hoveredUat, selectedUat } =
    useUatContext();

  return (
    <path
      id={judet?.id}
      d={judet?.dPath}
      style={{
        fill:
          selectedUat?.id === judet.id
            ? "none"
            : hoveredUat?.id === judet.id
            ? "blue"
            : "white",
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
  );
};

const PathUAT = ({ uat }: { uat: UAT }) => {
  const { setHoveredUat, hoveredUat } = useUatContext();

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
        fill: hoveredUat?.id === uat.id ? "cyan" : "gray",
        stroke: "#000",
        strokeWidth: ".25",
      }}
      data-originalStrokeWidth="0.25"
      stroke="#1e024b"
    />
  );
};
