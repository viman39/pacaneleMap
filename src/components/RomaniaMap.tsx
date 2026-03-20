import { DEFAULT_VIEW_BOX } from "../data/constants";
import { judete } from "../data/romania-counties";
import { useGetCounty } from "../hooks/useGetCounty";
import { PathJudet } from "./PathJudet";
import { PathUAT } from "./PathUAT";

export default function RomaniaMap() {
  const judet = useGetCounty();

  return (
    <svg
      id="wrapper"
      viewBox={DEFAULT_VIEW_BOX}
      preserveAspectRatio="xMinYMin"
      height="70vh"
      width="100vw"
    >
      <g id="map-group">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="map"
          strokeLinecap="round"
          strokeLinejoin="round"
          version="1.2"
          viewBox={judet ? judet?.bBox : DEFAULT_VIEW_BOX}
          preserveAspectRatio="xMinYMin"
        >
          <g id="UATs">
            {judet &&
              judet?.UATs.map((uat: any) => <PathUAT key={uat.id} uat={uat} />)}
          </g>
          <g id="counties">
            {judet ? (
              <PathJudet judet={judet} displayAuto={false} />
            ) : (
              judete.map((judet) => (
                <PathJudet key={judet.id} judet={judet} displayAuto={true} />
              ))
            )}
          </g>
        </svg>
      </g>
    </svg>
  );
}
